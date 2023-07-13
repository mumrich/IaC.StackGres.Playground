import { Construct } from "constructs";
import { Release as HelmRelease } from "@cdktf/provider-helm/lib/release";
import { TerraformStack } from "cdktf";
import { resolve } from "path";
import { useHelmProvider } from "../helpers/HelmHelper";
import { LocalProvider } from "@cdktf/provider-local/lib/provider";
import { DataLocalFile } from "@cdktf/provider-local/lib/data-local-file";

export default class ProxySqlCluster extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    useHelmProvider(this);
    new LocalProvider(this, "local-provider");

    const proxySqlValues = new DataLocalFile(this, "proxysql.yaml", {
      filename: resolve(__dirname, "../helm-values/proxysql.yaml"),
    });

    new HelmRelease(this, "proxysql-release", {
      chart: "proxysql",
      name: "proxysql",
      namespace: "proxysql",
      repository: "https://christianknell.github.io/helm-charts",
      values: [proxySqlValues.content],
      createNamespace: true,
      wait: true,
      waitForJobs: true,
    });
  }
}
