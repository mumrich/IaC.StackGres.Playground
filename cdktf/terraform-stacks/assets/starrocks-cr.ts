import { ClusterRoleV1Config } from "@cdktf/provider-kubernetes/lib/cluster-role-v1";

const cr: ClusterRoleV1Config = {
  metadata: {
    name: "starrocks-manager",
  },
  rule: [
    {
      apiGroups: ["apps"],
      resources: ["statefulsets"],
      verbs: ["create", "delete", "get", "list", "patch", "update", "watch"],
    },
    {
      apiGroups: ["autoscaling"],
      resources: ["horizontalpodautoscalers"],
      verbs: ["create", "delete", "get", "list", "patch", "update", "watch"],
    },
    {
      apiGroups: [""],
      resources: ["configmaps"],
      verbs: ["get", "list", "watch"],
    },
    {
      apiGroups: [""],
      resources: ["endpoints"],
      verbs: ["get", "list", "watch"],
    },
    {
      apiGroups: [""],
      resources: ["pods"],
      verbs: ["get", "list", "watch"],
    },
    {
      apiGroups: [""],
      resources: ["secrets"],
      verbs: ["get", "list", "watch"],
    },
    {
      apiGroups: [""],
      resources: ["serviceaccounts"],
      verbs: ["create", "delete", "get", "list", "patch", "update", "watch"],
    },
    {
      apiGroups: [""],
      resources: ["services"],
      verbs: ["create", "delete", "get", "list", "patch", "update", "watch"],
    },
    {
      apiGroups: ["rbac.authorization.k8s.io"],
      resources: ["clusterrolebindings"],
      verbs: ["create", "delete", "get", "list", "patch", "update", "watch"],
    },
    {
      apiGroups: ["rbac.authorization.k8s.io"],
      resources: ["rolebindings"],
      verbs: ["create", "delete", "get", "list", "patch", "update", "watch"],
    },
    {
      apiGroups: ["starrocks.com"],
      resources: ["starrocksclusters"],
      verbs: ["create", "delete", "get", "list", "patch", "update", "watch"],
    },
    {
      apiGroups: ["starrocks.com"],
      resources: ["starrocksclusters/finalizers"],
      verbs: ["update"],
    },
    {
      apiGroups: ["starrocks.com"],
      resources: ["starrocksclusters/status"],
      verbs: ["get", "patch", "update"],
    },
  ],
};

export default cr;
