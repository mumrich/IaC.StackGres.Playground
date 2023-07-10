import { Construct } from "constructs";
import { HelmProvider } from "@cdktf/provider-helm/lib/provider";
import { Release as HelmRelease } from "@cdktf/provider-helm/lib/release";
import { Fn, TerraformOutput, TerraformStack, TerraformVariable } from "cdktf";
import { DataKubernetesSecretV1 } from "@cdktf/provider-kubernetes/lib/data-kubernetes-secret-v1";
import { KubernetesProvider } from "@cdktf/provider-kubernetes/lib/provider";

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

    const k8sProvider = new KubernetesProvider(
      this,
      idPrefixer("k8s-provider"),
      {
        configPath: "~/.kube/config",
      }
    );

    new HelmProvider(this, idPrefixer("helm-provider"), {
      kubernetes: {
        configPath: k8sProvider.configPath,
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

    const credentials = new DataKubernetesSecretV1(
      this,
      idPrefixer("credentials"),
      {
        dependsOn: [helmRelase],
        metadata: {
          name: "stackgres-restapi",
          namespace: k8sNamespace,
          labels: {
            name: helmRelase.name,
          },
        },
      }
    );

    new TerraformOutput(this, "credentials-username", {
      value: Fn.nonsensitive(credentials.data.lookup("k8sUsername")),
    });

    new TerraformOutput(this, "credentials-password", {
      value: Fn.nonsensitive(credentials.data.lookup("clearPassword")),
    });
  }
}
