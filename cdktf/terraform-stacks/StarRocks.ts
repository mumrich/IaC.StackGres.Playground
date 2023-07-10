import { Construct } from "constructs";
import { HelmProvider } from "@cdktf/provider-helm/lib/provider";
import { Release as HelmRelease } from "@cdktf/provider-helm/lib/release";
import { Shell } from "../.gen/modules/shell";
import { TerraformOutput, TerraformStack, TerraformVariable } from "cdktf";

export default class StarRocks extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    function idPrefixer(postfix: string): string {
      return `${id}-${postfix}`;
    }

    const k8sNamespace = "starrocks";
    const chartName = "kube-starrocks";

    const chartVersion = new TerraformVariable(this, "chartVersion", {
      type: "string",
      default: "1.6.1",
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
      repository: "https://starrocks.github.io/helm-charts",
      createNamespace: true,
      wait: false,
      waitForJobs: true,
    });

    const notes = new Shell(this, idPrefixer("notes"), {
      suppressConsole: true,
      dependsOn: [helmRelase],
      commandUnix: `helm get notes -n ${k8sNamespace} ${chartName}`,
    });

    new TerraformOutput(this, "notes", {
      value: notes.stdoutOutput,
    });
  }
}
