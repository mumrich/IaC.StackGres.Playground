import { Construct } from "constructs";
import { HelmProvider } from "@cdktf/provider-helm/lib/provider";
import { Release as HelmRelease } from "@cdktf/provider-helm/lib/release";
import { Shell } from "../.gen/modules/shell";
import { TerraformOutput, TerraformStack, TerraformVariable } from "cdktf";

export default class StackGres extends TerraformStack {
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
      wait: false,
      waitForJobs: true,
    });

    new Shell(this, idPrefixer("operator-check"), {
      suppressConsole: true,
      dependsOn: [helmRelase],
      commandUnix: `kubectl wait -n ${k8sNamespace} deployment/stackgres-operator --for condition=Available`,
      failOnNonzeroExitCode: true,
    });

    new Shell(this, idPrefixer("restapi-check"), {
      suppressConsole: true,
      dependsOn: [helmRelase],
      commandUnix: `kubectl wait -n ${k8sNamespace} deployment/stackgres-restapi --for condition=Available`,
      failOnNonzeroExitCode: true,
    });

    const credentialsUsername = new Shell(
      this,
      idPrefixer("credentials-username"),
      {
        suppressConsole: true,
        dependsOn: [helmRelase],
        commandUnix: `kubectl get secret -n ${k8sNamespace} stackgres-restapi --template '{{ .data.k8sUsername | base64decode }}'`,
      }
    );

    const credentialsPassword = new Shell(
      this,
      idPrefixer("credentials-password"),
      {
        suppressConsole: true,
        dependsOn: [helmRelase],
        commandUnix: `kubectl get secret -n ${k8sNamespace} stackgres-restapi --template '{{ .data.clearPassword | base64decode }}'`,
      }
    );

    const notes = new Shell(this, idPrefixer("notes"), {
      suppressConsole: true,
      dependsOn: [helmRelase],
      commandUnix: `helm get notes -n ${k8sNamespace} ${chartName}`,
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
