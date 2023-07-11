import { Construct } from "constructs";
import {
  KubernetesProvider,
  KubernetesProviderConfig,
} from "@cdktf/provider-kubernetes/lib/provider";

export function useK8sProvider(
  scope: Construct,
  id: string = "k8s-provider",
  config: KubernetesProviderConfig = {
    configPath: "~/.kube/config",
  }
) {
  return new KubernetesProvider(scope, id, config);
}
