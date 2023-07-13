import * as kubectlCmd from "../.gen/modules/kubectl-cmd";
import { Cluster } from "../.gen/providers/k3d/cluster";
import { Construct } from "constructs/lib/construct";
import { DataK3DCluster } from "../.gen/providers/k3d/data-k3d-cluster";
import { File } from "@cdktf/provider-local/lib/file";
import { Fn, TerraformOutput, TerraformVariable } from "cdktf";
import { K3DProvider } from "../.gen/providers/k3d/provider";
import { LocalProvider } from "@cdktf/provider-local/lib/provider";
import { Release as HelmRelease } from "@cdktf/provider-helm/lib/release";
import { Sleep } from "@cdktf/provider-time/lib/sleep";
import { TerraformStack } from "cdktf/lib/terraform-stack";
import { TimeProvider } from "@cdktf/provider-time/lib/provider";
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
    new LocalProvider(this, "local-provider");

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
    });

    const nginxDeploymentPatchName = "nginx-deployment-patch.yaml";
    new File(this, nginxDeploymentPatchName, {
      content: `apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      containers:
        - args:
            - --enable-ssl-passthrough
      `,
      filename: nginxDeploymentPatchName,
    });

    new kubectlCmd.KubectlCmd(this, "kubectl-cmd", {
      app: "foo",
      clusterName: k3dCluster.name,
      credentials: {
        kubeconfigPath: "~/.kube/config",
      },
      cmds: [
        `kubectl -n ingress-nginx patch deployment/ingress-nginx-controller --patch-file ${nginxDeploymentPatchName}`,
      ],
    });

    new TerraformOutput(this, "kubeconfig", {
      value: Fn.nonsensitive(datK3dCluster.kubeconfigRaw),
    });
  }
}
