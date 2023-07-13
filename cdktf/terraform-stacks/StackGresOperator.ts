import { Construct } from "constructs";
import { DataKubernetesSecretV1 } from "@cdktf/provider-kubernetes/lib/data-kubernetes-secret-v1";
import { Fn, TerraformOutput, TerraformStack } from "cdktf";
import { IngressV1 } from "@cdktf/provider-kubernetes/lib/ingress-v1";
import { Release as HelmRelease } from "@cdktf/provider-helm/lib/release";
import { useHelmProvider } from "../helpers/HelmHelper";
import { useK8sProvider } from "../helpers/K8sHelper";
import { useTfVar } from "../helpers/VarHelper";

export default class StackGresOperator extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    function idPrefixer(postfix: string): string {
      return `${id}-${postfix}`;
    }

    const chartVersion = useTfVar(this, "chartVersion", "1.5.0");
    const k8sNamespace = "stackgres";
    const chartName = "stackgres-operator";

    useK8sProvider(this, idPrefixer("k8s-provider"));
    useHelmProvider(this, idPrefixer("helm-provider"));

    // helm install --create-namespace --namespace stackgres stackgres-operator --set-string adminui.service.type=ClusterIP https://stackgres.io/downloads/stackgres-k8s/stackgres/1.5.0/helm/stackgres-operator.tgz
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
      ],
      wait: true,
      waitForJobs: true,
      skipCrds: false,
    });

    const hostname = "stackgress.multikube";

    // TODO HMO: not working yet
    new IngressV1(this, idPrefixer("stackgres-admin-ui-ingress"), {
      dependsOn: [helmRelase],
      metadata: {
        name: "stackgress-admin-ui-ingresss",
        namespace: k8sNamespace,
      },
      spec: {
        tls: [
          {
            hosts: [hostname],
          },
        ],
        rule: [
          {
            host: hostname,
            http: {
              path: [
                {
                  path: "/",
                  pathType: "Prefix",
                  backend: {
                    service: {
                      name: "stackgres-restapi",
                      port: {
                        number: 443,
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
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
