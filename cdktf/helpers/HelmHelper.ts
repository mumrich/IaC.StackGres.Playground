import { Construct } from "constructs";
import {
  HelmProvider,
  HelmProviderConfig,
} from "@cdktf/provider-helm/lib/provider";

export function useHelmProvider(
  scope: Construct,
  id: string = "helm-provider",
  config: HelmProviderConfig = {
    kubernetes: {
      configPath: "~/.kube/config",
    },
  }
) {
  return new HelmProvider(scope, id, config);
}
