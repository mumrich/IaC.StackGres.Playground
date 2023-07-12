import { Cluster } from "../.gen/providers/k3d/cluster";
import { Construct } from "constructs/lib/construct";
import { DataK3DCluster } from "../.gen/providers/k3d/data-k3d-cluster";
import { Fn, TerraformOutput, TerraformVariable } from "cdktf";
import { K3DProvider } from "../.gen/providers/k3d/provider";
import { Release as HelmRelease } from "@cdktf/provider-helm/lib/release";
import { Sleep } from "@cdktf/provider-time/lib/sleep";
import { TerraformStack } from "cdktf/lib/terraform-stack";
import { TimeProvider } from "@cdktf/provider-time/lib/provider";
import { resolve } from "path";
import { useHelmProvider } from "../helpers/HelmHelper";
import { useTfVar } from "../helpers/VarHelper";

export default class K3dCluster extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const clusterName = new TerraformVariable(this, "name", {
      default: "MyCluster",
      type: "string",
    });

    const nbrServers = useTfVar(this, "servers", "1");
    const nbrAgents = useTfVar(this, "agents", "2");
    const ingressNginxVersion = useTfVar(
      this,
      "ingress-nginx-version",
      "4.7.1"
    );

    useHelmProvider(this);
    new TimeProvider(this, "time-provider");
    new K3DProvider(this, "k3d-provider");

    const k3dCluster = new Cluster(this, "k3d-cluster", {
      name: clusterName.value,
      servers: nbrServers.value,
      agents: nbrAgents.value,
      k3S: {
        extraArgs: [
          {
            arg: "--disable=traefik",
            nodeFilters: ["server:*"],
          },
        ],
      },
      port: [
        {
          hostPort: 80,
          containerPort: 80,
          nodeFilters: ["loadbalancer"],
        },
        {
          hostPort: 443,
          containerPort: 443,
          nodeFilters: ["loadbalancer"],
        },
      ],
      kubeconfig: {
        updateDefaultKubeconfig: true,
        switchCurrentContext: true,
      },
    });

    const waitForK3d = new Sleep(this, "wait-for-k3d", {
      dependsOn: [k3dCluster],
      createDuration: "30s",
    });

    const datK3dCluster = new DataK3DCluster(this, "data-k3d-cluster", {
      name: k3dCluster.name,
      dependsOn: [waitForK3d],
    });

    const nginxControllerName = "ingress-nginx";

    new HelmRelease(this, "nginx-ingress-controller", {
      dependsOn: [waitForK3d],
      name: nginxControllerName,
      namespace: nginxControllerName,
      chart: nginxControllerName,
      version: ingressNginxVersion.value,
      repository: "https://kubernetes.github.io/ingress-nginx",
      set: [
        {
          name: "controller.ingressClassResource.default",
          value: "true",
          type: "auto",
        },
      ],
      createNamespace: true,
      wait: true,
      waitForJobs: true,
      postrender: {
        binaryPath: "bash",
        args: [
          resolve(__dirname, "../helm-postrender/ingress-nginx/kustomize.sh"),
        ],
      },
    });

    new TerraformOutput(this, "kubeconfig", {
      value: Fn.nonsensitive(datK3dCluster.kubeconfigRaw),
    });
  }
}
