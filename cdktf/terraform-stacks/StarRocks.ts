import ClusterRoleConfig from "./assets/starrocks-cr";
import ManifestConfig from "./assets/starrocks-crd";
import { ClusterRole } from "@cdktf/provider-kubernetes/lib/cluster-role";
import { ClusterRoleBinding } from "@cdktf/provider-kubernetes/lib/cluster-role-binding";
import { Construct } from "constructs";
import { DataKubernetesNamespace } from "@cdktf/provider-kubernetes/lib/data-kubernetes-namespace";
import { DataKubernetesServiceAccount } from "@cdktf/provider-kubernetes/lib/data-kubernetes-service-account";
import { Deployment } from "@cdktf/provider-kubernetes/lib/deployment";
import { KubernetesProvider } from "@cdktf/provider-kubernetes/lib/provider";
import { Manifest } from "@cdktf/provider-kubernetes/lib/manifest";
import { Role } from "@cdktf/provider-kubernetes/lib/role";
import { RoleBinding } from "@cdktf/provider-kubernetes/lib/role-binding";
import { TerraformStack } from "cdktf";

export default class StarRocks extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    function idPrefixer(postfix: string): string {
      return `${id}-${postfix}`;
    }

    const k8sNamespace = "starrocks";

    new KubernetesProvider(this, idPrefixer("k8s-provider"), {
      configPath: "~/.kube/config",
    });

    new Manifest(this, idPrefixer("k8s-crds"), ManifestConfig);

    const ns = new DataKubernetesNamespace(this, idPrefixer("k8s-namespace"), {
      metadata: {
        name: k8sNamespace,
        labels: {
          "control-plane": "cn-controller-manager",
        },
      },
    });

    new DataKubernetesServiceAccount(this, idPrefixer("k8s-service-account"), {
      metadata: {
        name: "starrocks-controller",
        namespace: ns.metadata.name,
      },
    });

    new ClusterRole(this, idPrefixer("k8s-cluster-role"), ClusterRoleConfig);

    new ClusterRoleBinding(this, idPrefixer("k8s-cluster-role-binding"), {
      metadata: {
        name: "starrocks-manager-rolebinding",
      },
      roleRef: {
        apiGroup: "rbac.authorization.k8s.io",
        kind: "ClusterRole",
        name: "starrocks-manager",
      },
      subject: [
        {
          kind: "ServiceAccount",
          name: "starrocks-controller",
          namespace: ns.metadata.name,
        },
      ],
    });

    new Role(this, idPrefixer("k8s-role"), {
      metadata: {
        name: "starrocks-leader-election-role",
        namespace: "starrocks",
      },
      rule: [
        {
          apiGroups: [""],
          resources: ["configmaps"],
          verbs: [
            "get",
            "list",
            "watch",
            "create",
            "update",
            "patch",
            "delete",
          ],
        },
        {
          apiGroups: ["coordination.k8s.io"],
          resources: ["leases"],
          verbs: [
            "get",
            "list",
            "watch",
            "create",
            "update",
            "patch",
            "delete",
          ],
        },
        {
          apiGroups: [""],
          resources: ["events"],
          verbs: ["create", "patch"],
        },
      ],
    });

    new RoleBinding(this, idPrefixer("k8s-role-binding"), {
      metadata: {
        name: "starrocks-leader-election-rolebinding",
        namespace: ns.metadata.name,
      },
      roleRef: {
        apiGroup: "rbac.authorization.k8s.io",
        kind: "Role",
        name: "starrocks-leader-election-role",
      },
      subject: [
        {
          kind: "ServiceAccount",
          name: "starrocks-controller",
          namespace: ns.metadata.name,
        },
      ],
    });

    new Deployment(this, idPrefixer("k8s-deployment"), {
      metadata: {
        name: "starrocks-controller",
        namespace: "starrocks",
        labels: {
          "control-plane": "starrocks-controller",
        },
      },
      spec: {
        selector: {
          matchLabels: {
            "control-plane": "starrocks-controller",
          },
        },
        replicas: "1",
        template: {
          metadata: {
            annotations: {
              "kubectl.kubernetes.io/default-container": "manager",
            },
            labels: {
              "control-plane": "starrocks-controller",
            },
          },
          spec: {
            securityContext: {
              runAsNonRoot: false,
            },
            container: [
              {
                command: ["/sroperator"],
                args: ["--leader-elect"],
                image: "starrocks/operator:latest",
                name: "sroperator",
                securityContext: {
                  allowPrivilegeEscalation: false,
                },
                livenessProbe: {
                  httpGet: {
                    path: "/healthz",
                    port: "8081",
                  },
                  initialDelaySeconds: 15,
                  periodSeconds: 20,
                },
                readinessProbe: {
                  httpGet: {
                    path: "/readyz",
                    port: "8081",
                  },
                  initialDelaySeconds: 5,
                  periodSeconds: 10,
                },
                resources: {
                  limits: {
                    cpu: "500m",
                    memory: "128Mi",
                  },
                  requests: {
                    cpu: "10m",
                    memory: "64Mi",
                  },
                },
              },
            ],
            serviceAccountName: "starrocks-controller",
            terminationGracePeriodSeconds: 10,
          },
        },
      },
    });
  }
}
