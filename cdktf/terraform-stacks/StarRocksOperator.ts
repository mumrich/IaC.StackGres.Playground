import { Construct } from "constructs";
import { Release as HelmRelease } from "@cdktf/provider-helm/lib/release";
import { TerraformStack } from "cdktf";
import { resolve } from "path";
import { useHelmProvider } from "../helpers/HelmHelper";

export default class StarRocksOperator extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    useHelmProvider(this);

    const chartName = "starrocks-operator";

    new HelmRelease(this, "starrocks-operator-release", {
      name: chartName,
      chart: resolve(__dirname, `../helm-charts/${chartName}`),
      createNamespace: true,
      wait: true,
      waitForJobs: true,
    });
  }
}
