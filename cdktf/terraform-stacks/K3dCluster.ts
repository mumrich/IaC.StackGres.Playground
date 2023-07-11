import { Cluster } from "../.gen/providers/k3d/cluster";
import { Construct } from "constructs/lib/construct";
import { K3DProvider } from "../.gen/providers/k3d/provider";
import { Registry } from "../.gen/providers/k3d/registry";
import { TerraformStack } from "cdktf/lib/terraform-stack";
import { TerraformVariable } from "cdktf";

export default class K3dCluster extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const clusterName = new TerraformVariable(this, "name", {
      default: "MyCluster",
      type: "string",
    });

    const nbrServers = new TerraformVariable(this, "servers", {
      default: "1",
    });

    const nbrAgents = new TerraformVariable(this, "agents", {
      default: "2",
    });

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
  }
}
