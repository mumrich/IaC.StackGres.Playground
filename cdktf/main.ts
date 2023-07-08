import { Construct } from "constructs";
import { App, TerraformOutput, TerraformStack, TerraformVariable } from "cdktf";
import { HelmProvider } from "@cdktf/provider-helm/lib/provider";
import { Release as HelmRelease } from "@cdktf/provider-helm/lib/release";
import { Shell } from "./.gen/modules/shell";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    function idPrefixer(postfix: string): string {
      return `${id}-${postfix}`;
    }

    const k8sNamespace = "stackgres";
    const chartName = "stackgres-operator";

    const chartVersion = new TerraformVariable(this, "chartVersion", {
      type: "string",
      default: "1.5.0",
    });

    new HelmProvider(this, idPrefixer("helm-provider"), {
      kubernetes: {
        configPath: "~/.kube/config",
      },
    });

    const helmRelase = new HelmRelease(this, idPrefixer("helm-release"), {
      name: chartName,
      namespace: k8sNamespace,
      chart: chartName,
      version: chartVersion.value,
      repository:
        "https://stackgres.io/downloads/stackgres-k8s/stackgres/helm/",
      createNamespace: true,
      set: [
        {
          name: "adminui.service.type",
          value: "ClusterIP",
          type: "string",
        },
        {
          name: "cert.resetCerts",
          value: "true",
          type: "auto",
        },
      ],
      wait: true,
      waitForJobs: true,
    });

    new Shell(this, idPrefixer("operator-check"), {
      dependsOn: [helmRelase],
      commandUnix: `kubectl wait -n ${k8sNamespace} deployment/stackgres-operator --for condition=Available`,
      failOnNonzeroExitCode: true,
    });

    new Shell(this, idPrefixer("restapi-check"), {
      dependsOn: [helmRelase],
      commandUnix: `kubectl wait -n ${k8sNamespace} deployment/stackgres-restapi --for condition=Available`,
      failOnNonzeroExitCode: true,
    });

    const credentialsUsername = new Shell(
      this,
      idPrefixer("credentials-username"),
      {
        dependsOn: [helmRelase],
        commandUnix: `kubectl get secret -n ${k8sNamespace} stackgres-restapi --template '{{ .data.k8sUsername | base64decode }}'`,
      }
    );

    const credentialsPassword = new Shell(
      this,
      idPrefixer("credentials-password"),
      {
        dependsOn: [helmRelase],
        commandUnix: `kubectl get secret -n ${k8sNamespace} stackgres-restapi --template '{{ .data.clearPassword | base64decode }}'`,
      }
    );

    const notes = new Shell(this, idPrefixer("notes"), {
      dependsOn: [helmRelase],
      commandUnix: `helm get notes -n ${k8sNamespace} stackgres-operator`,
    });

    new TerraformOutput(this, "credentials-username", {
      value: credentialsUsername.stdoutOutput,
    });

    new TerraformOutput(this, "credentials-password", {
      value: credentialsPassword.stdoutOutput,
    });

    new TerraformOutput(this, "notes", {
      value: notes.stdoutOutput,
    });
  }
}

const app = new App();

new MyStack(app, "cdktf");

app.synth();
