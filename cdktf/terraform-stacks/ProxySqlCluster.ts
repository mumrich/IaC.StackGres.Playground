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

    const mysqlYaml = new DataLocalFile(this, "mysql.yaml", {
      filename: resolve(__dirname, "../helm-values/mysql.yaml"),
    });

    new HelmRelease(this, "proxysql-db-release", {
      name: "mysql-8",
      chart: "mysql",
      repository: "https://charts.bitnami.com/bitnami",
      values: [mysqlYaml.content],
    });

    new HelmRelease(this, "proxysql-cluster-release", {
      name: "proxysql-cluster",
      namespace: "proxysql",
      chart: resolve(__dirname, "../helm-charts/proxysql-cluster"),
      createNamespace: true,
      wait: true,
      waitForJobs: true,
    });
  }
}
