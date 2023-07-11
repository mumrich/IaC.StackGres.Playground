import { Cluster } from "../.gen/providers/k3d/cluster";
import { Construct } from "constructs/lib/construct";
import { K3DProvider } from "../.gen/providers/k3d/provider";
import { Registry } from "../.gen/providers/k3d/registry";
import { Release as HelmRelease } from "@cdktf/provider-helm/lib/release";
import { TerraformStack } from "cdktf/lib/terraform-stack";
import { TerraformVariable } from "cdktf";
import { useTfVar } from "../helpers/VarHelper";
import { useHelmProvider } from "../helpers/HelmHelper";

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

    new K3DProvider(this, "k3d-provider");

    new Cluster(this, "k3d-cluster", {
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
          hostPort: 8081,
          containerPort: 80,
          nodeFilters: ["loadbalancer"],
        },
      ],
      kubeconfig: {
        updateDefaultKubeconfig: true,
      },
    });

    new Registry(this, "k3d-registry", {
      name: "my-registry",
    });

    const nginxControllerName = "ingress-nginx";

    new HelmRelease(this, "nginx-ingress-controller", {
      name: nginxControllerName,
      namespace: nginxControllerName,
      chart: nginxControllerName,
      version: ingressNginxVersion.value,
      repository: "https://kubernetes.github.io/ingress-nginx",
      createNamespace: true,
      wait: true,
      waitForJobs: true,
    });
  }
}
