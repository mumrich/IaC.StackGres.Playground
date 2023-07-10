import { ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";

const crd: ManifestConfig = {
  manifest: {
    metadata: {
      annotations: {
        "controller-gen.kubebuilder.io/version": "v0.8.0",
      },
      creationTimestamp: null,
      name: "starrocksclusters.starrocks.com",
    },
    spec: {
      group: "starrocks.com",
      names: {
        kind: "StarRocksCluster",
        listKind: "StarRocksClusterList",
        plural: "starrocksclusters",
        shortNames: ["src"],
        singular: "starrockscluster",
      },
      scope: "Namespaced",
      versions: [
        {
          additionalPrinterColumns: [
            {
              jsonPath: ".status.starRocksFeStatus.phase",
              name: "FeStatus",
              type: "string",
            },
            {
              jsonPath: ".status.starRocksCnStatus.phase",
              name: "CnStatus",
              type: "string",
            },
            {
              jsonPath: ".status.starRocksBeStatus.phase",
              name: "BeStatus",
              type: "string",
            },
          ],
          name: "v1",
          schema: {
            openAPIV3Schema: {
              properties: {
                apiVersion: {
                  type: "string",
                },
                kind: {
                  type: "string",
                },
                metadata: {
                  type: "object",
                },
                spec: {
                  properties: {
                    serviceAccount: {
                      type: "string",
                    },
                    starRocksBeSpec: {
                      properties: {
                        affinity: {
                          properties: {
                            nodeAffinity: {
                              properties: {
                                preferredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        preference: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchFields: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                          },
                                          type: "object",
                                        },
                                        weight: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      required: ["preference", "weight"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                requiredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    properties: {
                                      nodeSelectorTerms: {
                                        items: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchFields: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                          },
                                          type: "object",
                                        },
                                        type: "array",
                                      },
                                    },
                                    required: ["nodeSelectorTerms"],
                                    type: "object",
                                  },
                              },
                              type: "object",
                            },
                            podAffinity: {
                              properties: {
                                preferredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        podAffinityTerm: {
                                          properties: {
                                            labelSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaceSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaces: {
                                              items: {
                                                type: "string",
                                              },
                                              type: "array",
                                            },
                                            topologyKey: {
                                              type: "string",
                                            },
                                          },
                                          required: ["topologyKey"],
                                          type: "object",
                                        },
                                        weight: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      required: ["podAffinityTerm", "weight"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                requiredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        labelSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaceSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaces: {
                                          items: {
                                            type: "string",
                                          },
                                          type: "array",
                                        },
                                        topologyKey: {
                                          type: "string",
                                        },
                                      },
                                      required: ["topologyKey"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                              },
                              type: "object",
                            },
                            podAntiAffinity: {
                              properties: {
                                preferredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        podAffinityTerm: {
                                          properties: {
                                            labelSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaceSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaces: {
                                              items: {
                                                type: "string",
                                              },
                                              type: "array",
                                            },
                                            topologyKey: {
                                              type: "string",
                                            },
                                          },
                                          required: ["topologyKey"],
                                          type: "object",
                                        },
                                        weight: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      required: ["podAffinityTerm", "weight"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                requiredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        labelSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaceSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaces: {
                                          items: {
                                            type: "string",
                                          },
                                          type: "array",
                                        },
                                        topologyKey: {
                                          type: "string",
                                        },
                                      },
                                      required: ["topologyKey"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                              },
                              type: "object",
                            },
                          },
                          type: "object",
                        },
                        annotations: {
                          additionalProperties: {
                            type: "string",
                          },
                          type: "object",
                        },
                        beEnvVars: {
                          items: {
                            properties: {
                              name: {
                                type: "string",
                              },
                              value: {
                                type: "string",
                              },
                              valueFrom: {
                                properties: {
                                  configMapKeyRef: {
                                    properties: {
                                      key: {
                                        type: "string",
                                      },
                                      name: {
                                        type: "string",
                                      },
                                      optional: {
                                        type: "boolean",
                                      },
                                    },
                                    required: ["key"],
                                    type: "object",
                                  },
                                  fieldRef: {
                                    properties: {
                                      apiVersion: {
                                        type: "string",
                                      },
                                      fieldPath: {
                                        type: "string",
                                      },
                                    },
                                    required: ["fieldPath"],
                                    type: "object",
                                  },
                                  resourceFieldRef: {
                                    properties: {
                                      containerName: {
                                        type: "string",
                                      },
                                      divisor: {
                                        anyOf: [
                                          {
                                            type: "integer",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                        pattern:
                                          "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                        "x-kubernetes-int-or-string": true,
                                      },
                                      resource: {
                                        type: "string",
                                      },
                                    },
                                    required: ["resource"],
                                    type: "object",
                                  },
                                  secretKeyRef: {
                                    properties: {
                                      key: {
                                        type: "string",
                                      },
                                      name: {
                                        type: "string",
                                      },
                                      optional: {
                                        type: "boolean",
                                      },
                                    },
                                    required: ["key"],
                                    type: "object",
                                  },
                                },
                                type: "object",
                              },
                            },
                            required: ["name"],
                            type: "object",
                          },
                          type: "array",
                        },
                        configMapInfo: {
                          properties: {
                            configMapName: {
                              type: "string",
                            },
                            resolveKey: {
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        configMaps: {
                          items: {
                            properties: {
                              mountPath: {
                                type: "string",
                              },
                              name: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                        fsGroup: {
                          format: "int64",
                          type: "integer",
                        },
                        hostAliases: {
                          items: {
                            properties: {
                              hostnames: {
                                items: {
                                  type: "string",
                                },
                                type: "array",
                              },
                              ip: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                        image: {
                          type: "string",
                        },
                        imagePullSecrets: {
                          items: {
                            properties: {
                              name: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                        limits: {
                          additionalProperties: {
                            anyOf: [
                              {
                                type: "integer",
                              },
                              {
                                type: "string",
                              },
                            ],
                            pattern:
                              "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                            "x-kubernetes-int-or-string": true,
                          },
                          type: "object",
                        },
                        name: {
                          pattern:
                            "[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*",
                          type: "string",
                        },
                        nodeSelector: {
                          additionalProperties: {
                            type: "string",
                          },
                          type: "object",
                        },
                        podLabels: {
                          additionalProperties: {
                            type: "string",
                          },
                          type: "object",
                        },
                        probe: {
                          properties: {
                            initialDelaySeconds: {
                              format: "int32",
                              minimum: 0,
                              type: "integer",
                            },
                            periodSeconds: {
                              format: "int32",
                              minimum: 1,
                              type: "integer",
                            },
                            type: {
                              enum: ["tcp", "command"],
                              type: "string",
                            },
                          },
                          required: ["type"],
                          type: "object",
                        },
                        replicas: {
                          format: "int32",
                          minimum: 0,
                          type: "integer",
                        },
                        requests: {
                          additionalProperties: {
                            anyOf: [
                              {
                                type: "integer",
                              },
                              {
                                type: "string",
                              },
                            ],
                            pattern:
                              "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                            "x-kubernetes-int-or-string": true,
                          },
                          type: "object",
                        },
                        schedulerName: {
                          type: "string",
                        },
                        secrets: {
                          items: {
                            properties: {
                              mountPath: {
                                type: "string",
                              },
                              name: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                        service: {
                          properties: {
                            annotations: {
                              additionalProperties: {
                                type: "string",
                              },
                              type: "object",
                            },
                            loadBalancerIP: {
                              type: "string",
                            },
                            name: {
                              pattern:
                                "[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*",
                              type: "string",
                            },
                            ports: {
                              items: {
                                properties: {
                                  containerPort: {
                                    format: "int32",
                                    type: "integer",
                                  },
                                  name: {
                                    type: "string",
                                  },
                                  nodePort: {
                                    format: "int32",
                                    type: "integer",
                                  },
                                  port: {
                                    format: "int32",
                                    type: "integer",
                                  },
                                },
                                required: ["containerPort", "port"],
                                type: "object",
                              },
                              type: "array",
                            },
                            type: {
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        serviceAccount: {
                          type: "string",
                        },
                        storageVolumes: {
                          items: {
                            properties: {
                              mountPath: {
                                type: "string",
                              },
                              name: {
                                pattern:
                                  "[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*",
                                type: "string",
                              },
                              storageClassName: {
                                type: "string",
                              },
                              storageSize: {
                                pattern:
                                  "(^0|([0-9]*l[.])?[0-9]+((M|G|T|E|P)i))$",
                                type: "string",
                              },
                            },
                            required: ["name", "storageSize"],
                            type: "object",
                          },
                          type: "array",
                        },
                        tolerations: {
                          items: {
                            properties: {
                              effect: {
                                type: "string",
                              },
                              key: {
                                type: "string",
                              },
                              operator: {
                                type: "string",
                              },
                              tolerationSeconds: {
                                format: "int64",
                                type: "integer",
                              },
                              value: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                      },
                      required: ["image"],
                      type: "object",
                    },
                    starRocksCnSpec: {
                      properties: {
                        affinity: {
                          properties: {
                            nodeAffinity: {
                              properties: {
                                preferredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        preference: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchFields: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                          },
                                          type: "object",
                                        },
                                        weight: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      required: ["preference", "weight"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                requiredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    properties: {
                                      nodeSelectorTerms: {
                                        items: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchFields: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                          },
                                          type: "object",
                                        },
                                        type: "array",
                                      },
                                    },
                                    required: ["nodeSelectorTerms"],
                                    type: "object",
                                  },
                              },
                              type: "object",
                            },
                            podAffinity: {
                              properties: {
                                preferredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        podAffinityTerm: {
                                          properties: {
                                            labelSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaceSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaces: {
                                              items: {
                                                type: "string",
                                              },
                                              type: "array",
                                            },
                                            topologyKey: {
                                              type: "string",
                                            },
                                          },
                                          required: ["topologyKey"],
                                          type: "object",
                                        },
                                        weight: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      required: ["podAffinityTerm", "weight"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                requiredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        labelSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaceSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaces: {
                                          items: {
                                            type: "string",
                                          },
                                          type: "array",
                                        },
                                        topologyKey: {
                                          type: "string",
                                        },
                                      },
                                      required: ["topologyKey"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                              },
                              type: "object",
                            },
                            podAntiAffinity: {
                              properties: {
                                preferredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        podAffinityTerm: {
                                          properties: {
                                            labelSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaceSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaces: {
                                              items: {
                                                type: "string",
                                              },
                                              type: "array",
                                            },
                                            topologyKey: {
                                              type: "string",
                                            },
                                          },
                                          required: ["topologyKey"],
                                          type: "object",
                                        },
                                        weight: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      required: ["podAffinityTerm", "weight"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                requiredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        labelSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaceSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaces: {
                                          items: {
                                            type: "string",
                                          },
                                          type: "array",
                                        },
                                        topologyKey: {
                                          type: "string",
                                        },
                                      },
                                      required: ["topologyKey"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                              },
                              type: "object",
                            },
                          },
                          type: "object",
                        },
                        annotations: {
                          additionalProperties: {
                            type: "string",
                          },
                          type: "object",
                        },
                        autoScalingPolicy: {
                          properties: {
                            hpaPolicy: {
                              properties: {
                                behavior: {
                                  properties: {
                                    scaleDown: {
                                      properties: {
                                        policies: {
                                          items: {
                                            properties: {
                                              periodSeconds: {
                                                format: "int32",
                                                type: "integer",
                                              },
                                              type: {
                                                type: "string",
                                              },
                                              value: {
                                                format: "int32",
                                                type: "integer",
                                              },
                                            },
                                            required: [
                                              "periodSeconds",
                                              "type",
                                              "value",
                                            ],
                                            type: "object",
                                          },
                                          type: "array",
                                        },
                                        selectPolicy: {
                                          type: "string",
                                        },
                                        stabilizationWindowSeconds: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      type: "object",
                                    },
                                    scaleUp: {
                                      properties: {
                                        policies: {
                                          items: {
                                            properties: {
                                              periodSeconds: {
                                                format: "int32",
                                                type: "integer",
                                              },
                                              type: {
                                                type: "string",
                                              },
                                              value: {
                                                format: "int32",
                                                type: "integer",
                                              },
                                            },
                                            required: [
                                              "periodSeconds",
                                              "type",
                                              "value",
                                            ],
                                            type: "object",
                                          },
                                          type: "array",
                                        },
                                        selectPolicy: {
                                          type: "string",
                                        },
                                        stabilizationWindowSeconds: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      type: "object",
                                    },
                                  },
                                  type: "object",
                                },
                                metrics: {
                                  items: {
                                    properties: {
                                      containerResource: {
                                        properties: {
                                          container: {
                                            type: "string",
                                          },
                                          name: {
                                            type: "string",
                                          },
                                          target: {
                                            properties: {
                                              averageUtilization: {
                                                format: "int32",
                                                type: "integer",
                                              },
                                              averageValue: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                              type: {
                                                type: "string",
                                              },
                                              value: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                            },
                                            required: ["type"],
                                            type: "object",
                                          },
                                        },
                                        required: [
                                          "container",
                                          "name",
                                          "target",
                                        ],
                                        type: "object",
                                      },
                                      external: {
                                        properties: {
                                          metric: {
                                            properties: {
                                              name: {
                                                type: "string",
                                              },
                                              selector: {
                                                properties: {
                                                  matchExpressions: {
                                                    items: {
                                                      properties: {
                                                        key: {
                                                          type: "string",
                                                        },
                                                        operator: {
                                                          type: "string",
                                                        },
                                                        values: {
                                                          items: {
                                                            type: "string",
                                                          },
                                                          type: "array",
                                                        },
                                                      },
                                                      required: [
                                                        "key",
                                                        "operator",
                                                      ],
                                                      type: "object",
                                                    },
                                                    type: "array",
                                                  },
                                                  matchLabels: {
                                                    additionalProperties: {
                                                      type: "string",
                                                    },
                                                    type: "object",
                                                  },
                                                },
                                                type: "object",
                                              },
                                            },
                                            required: ["name"],
                                            type: "object",
                                          },
                                          target: {
                                            properties: {
                                              averageUtilization: {
                                                format: "int32",
                                                type: "integer",
                                              },
                                              averageValue: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                              type: {
                                                type: "string",
                                              },
                                              value: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                            },
                                            required: ["type"],
                                            type: "object",
                                          },
                                        },
                                        required: ["metric", "target"],
                                        type: "object",
                                      },
                                      object: {
                                        properties: {
                                          describedObject: {
                                            properties: {
                                              apiVersion: {
                                                type: "string",
                                              },
                                              kind: {
                                                type: "string",
                                              },
                                              name: {
                                                type: "string",
                                              },
                                            },
                                            required: ["kind", "name"],
                                            type: "object",
                                          },
                                          metric: {
                                            properties: {
                                              name: {
                                                type: "string",
                                              },
                                              selector: {
                                                properties: {
                                                  matchExpressions: {
                                                    items: {
                                                      properties: {
                                                        key: {
                                                          type: "string",
                                                        },
                                                        operator: {
                                                          type: "string",
                                                        },
                                                        values: {
                                                          items: {
                                                            type: "string",
                                                          },
                                                          type: "array",
                                                        },
                                                      },
                                                      required: [
                                                        "key",
                                                        "operator",
                                                      ],
                                                      type: "object",
                                                    },
                                                    type: "array",
                                                  },
                                                  matchLabels: {
                                                    additionalProperties: {
                                                      type: "string",
                                                    },
                                                    type: "object",
                                                  },
                                                },
                                                type: "object",
                                              },
                                            },
                                            required: ["name"],
                                            type: "object",
                                          },
                                          target: {
                                            properties: {
                                              averageUtilization: {
                                                format: "int32",
                                                type: "integer",
                                              },
                                              averageValue: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                              type: {
                                                type: "string",
                                              },
                                              value: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                            },
                                            required: ["type"],
                                            type: "object",
                                          },
                                        },
                                        required: [
                                          "describedObject",
                                          "metric",
                                          "target",
                                        ],
                                        type: "object",
                                      },
                                      pods: {
                                        properties: {
                                          metric: {
                                            properties: {
                                              name: {
                                                type: "string",
                                              },
                                              selector: {
                                                properties: {
                                                  matchExpressions: {
                                                    items: {
                                                      properties: {
                                                        key: {
                                                          type: "string",
                                                        },
                                                        operator: {
                                                          type: "string",
                                                        },
                                                        values: {
                                                          items: {
                                                            type: "string",
                                                          },
                                                          type: "array",
                                                        },
                                                      },
                                                      required: [
                                                        "key",
                                                        "operator",
                                                      ],
                                                      type: "object",
                                                    },
                                                    type: "array",
                                                  },
                                                  matchLabels: {
                                                    additionalProperties: {
                                                      type: "string",
                                                    },
                                                    type: "object",
                                                  },
                                                },
                                                type: "object",
                                              },
                                            },
                                            required: ["name"],
                                            type: "object",
                                          },
                                          target: {
                                            properties: {
                                              averageUtilization: {
                                                format: "int32",
                                                type: "integer",
                                              },
                                              averageValue: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                              type: {
                                                type: "string",
                                              },
                                              value: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                            },
                                            required: ["type"],
                                            type: "object",
                                          },
                                        },
                                        required: ["metric", "target"],
                                        type: "object",
                                      },
                                      resource: {
                                        properties: {
                                          name: {
                                            type: "string",
                                          },
                                          target: {
                                            properties: {
                                              averageUtilization: {
                                                format: "int32",
                                                type: "integer",
                                              },
                                              averageValue: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                              type: {
                                                type: "string",
                                              },
                                              value: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                            },
                                            required: ["type"],
                                            type: "object",
                                          },
                                        },
                                        required: ["name", "target"],
                                        type: "object",
                                      },
                                      type: {
                                        type: "string",
                                      },
                                    },
                                    required: ["type"],
                                    type: "object",
                                  },
                                  type: "array",
                                },
                              },
                              type: "object",
                            },
                            maxReplicas: {
                              format: "int32",
                              type: "integer",
                            },
                            minReplicas: {
                              format: "int32",
                              type: "integer",
                            },
                            version: {
                              default: "v2beta2",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        cnEnvVars: {
                          items: {
                            properties: {
                              name: {
                                type: "string",
                              },
                              value: {
                                type: "string",
                              },
                              valueFrom: {
                                properties: {
                                  configMapKeyRef: {
                                    properties: {
                                      key: {
                                        type: "string",
                                      },
                                      name: {
                                        type: "string",
                                      },
                                      optional: {
                                        type: "boolean",
                                      },
                                    },
                                    required: ["key"],
                                    type: "object",
                                  },
                                  fieldRef: {
                                    properties: {
                                      apiVersion: {
                                        type: "string",
                                      },
                                      fieldPath: {
                                        type: "string",
                                      },
                                    },
                                    required: ["fieldPath"],
                                    type: "object",
                                  },
                                  resourceFieldRef: {
                                    properties: {
                                      containerName: {
                                        type: "string",
                                      },
                                      divisor: {
                                        anyOf: [
                                          {
                                            type: "integer",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                        pattern:
                                          "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                        "x-kubernetes-int-or-string": true,
                                      },
                                      resource: {
                                        type: "string",
                                      },
                                    },
                                    required: ["resource"],
                                    type: "object",
                                  },
                                  secretKeyRef: {
                                    properties: {
                                      key: {
                                        type: "string",
                                      },
                                      name: {
                                        type: "string",
                                      },
                                      optional: {
                                        type: "boolean",
                                      },
                                    },
                                    required: ["key"],
                                    type: "object",
                                  },
                                },
                                type: "object",
                              },
                            },
                            required: ["name"],
                            type: "object",
                          },
                          type: "array",
                        },
                        configMapInfo: {
                          properties: {
                            configMapName: {
                              type: "string",
                            },
                            resolveKey: {
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        configMaps: {
                          items: {
                            properties: {
                              mountPath: {
                                type: "string",
                              },
                              name: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                        fsGroup: {
                          format: "int64",
                          type: "integer",
                        },
                        hostAliases: {
                          items: {
                            properties: {
                              hostnames: {
                                items: {
                                  type: "string",
                                },
                                type: "array",
                              },
                              ip: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                        image: {
                          type: "string",
                        },
                        imagePullSecrets: {
                          items: {
                            properties: {
                              name: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                        limits: {
                          additionalProperties: {
                            anyOf: [
                              {
                                type: "integer",
                              },
                              {
                                type: "string",
                              },
                            ],
                            pattern:
                              "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                            "x-kubernetes-int-or-string": true,
                          },
                          type: "object",
                        },
                        name: {
                          pattern:
                            "[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*",
                          type: "string",
                        },
                        nodeSelector: {
                          additionalProperties: {
                            type: "string",
                          },
                          type: "object",
                        },
                        podLabels: {
                          additionalProperties: {
                            type: "string",
                          },
                          type: "object",
                        },
                        probe: {
                          properties: {
                            initialDelaySeconds: {
                              format: "int32",
                              minimum: 0,
                              type: "integer",
                            },
                            periodSeconds: {
                              format: "int32",
                              minimum: 1,
                              type: "integer",
                            },
                            type: {
                              enum: ["tcp", "command"],
                              type: "string",
                            },
                          },
                          required: ["type"],
                          type: "object",
                        },
                        replicas: {
                          format: "int32",
                          minimum: 0,
                          type: "integer",
                        },
                        requests: {
                          additionalProperties: {
                            anyOf: [
                              {
                                type: "integer",
                              },
                              {
                                type: "string",
                              },
                            ],
                            pattern:
                              "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                            "x-kubernetes-int-or-string": true,
                          },
                          type: "object",
                        },
                        schedulerName: {
                          type: "string",
                        },
                        secrets: {
                          items: {
                            properties: {
                              mountPath: {
                                type: "string",
                              },
                              name: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                        service: {
                          properties: {
                            annotations: {
                              additionalProperties: {
                                type: "string",
                              },
                              type: "object",
                            },
                            loadBalancerIP: {
                              type: "string",
                            },
                            name: {
                              pattern:
                                "[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*",
                              type: "string",
                            },
                            ports: {
                              items: {
                                properties: {
                                  containerPort: {
                                    format: "int32",
                                    type: "integer",
                                  },
                                  name: {
                                    type: "string",
                                  },
                                  nodePort: {
                                    format: "int32",
                                    type: "integer",
                                  },
                                  port: {
                                    format: "int32",
                                    type: "integer",
                                  },
                                },
                                required: ["containerPort", "port"],
                                type: "object",
                              },
                              type: "array",
                            },
                            type: {
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        serviceAccount: {
                          type: "string",
                        },
                        storageVolumes: {
                          items: {
                            properties: {
                              mountPath: {
                                type: "string",
                              },
                              name: {
                                pattern:
                                  "[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*",
                                type: "string",
                              },
                              storageClassName: {
                                type: "string",
                              },
                              storageSize: {
                                pattern:
                                  "(^0|([0-9]*l[.])?[0-9]+((M|G|T|E|P)i))$",
                                type: "string",
                              },
                            },
                            required: ["name", "storageSize"],
                            type: "object",
                          },
                          type: "array",
                        },
                        tolerations: {
                          items: {
                            properties: {
                              effect: {
                                type: "string",
                              },
                              key: {
                                type: "string",
                              },
                              operator: {
                                type: "string",
                              },
                              tolerationSeconds: {
                                format: "int64",
                                type: "integer",
                              },
                              value: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                      },
                      required: ["image"],
                      type: "object",
                    },
                    starRocksFeSpec: {
                      properties: {
                        affinity: {
                          properties: {
                            nodeAffinity: {
                              properties: {
                                preferredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        preference: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchFields: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                          },
                                          type: "object",
                                        },
                                        weight: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      required: ["preference", "weight"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                requiredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    properties: {
                                      nodeSelectorTerms: {
                                        items: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchFields: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                          },
                                          type: "object",
                                        },
                                        type: "array",
                                      },
                                    },
                                    required: ["nodeSelectorTerms"],
                                    type: "object",
                                  },
                              },
                              type: "object",
                            },
                            podAffinity: {
                              properties: {
                                preferredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        podAffinityTerm: {
                                          properties: {
                                            labelSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaceSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaces: {
                                              items: {
                                                type: "string",
                                              },
                                              type: "array",
                                            },
                                            topologyKey: {
                                              type: "string",
                                            },
                                          },
                                          required: ["topologyKey"],
                                          type: "object",
                                        },
                                        weight: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      required: ["podAffinityTerm", "weight"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                requiredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        labelSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaceSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaces: {
                                          items: {
                                            type: "string",
                                          },
                                          type: "array",
                                        },
                                        topologyKey: {
                                          type: "string",
                                        },
                                      },
                                      required: ["topologyKey"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                              },
                              type: "object",
                            },
                            podAntiAffinity: {
                              properties: {
                                preferredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        podAffinityTerm: {
                                          properties: {
                                            labelSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaceSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaces: {
                                              items: {
                                                type: "string",
                                              },
                                              type: "array",
                                            },
                                            topologyKey: {
                                              type: "string",
                                            },
                                          },
                                          required: ["topologyKey"],
                                          type: "object",
                                        },
                                        weight: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      required: ["podAffinityTerm", "weight"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                requiredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        labelSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaceSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaces: {
                                          items: {
                                            type: "string",
                                          },
                                          type: "array",
                                        },
                                        topologyKey: {
                                          type: "string",
                                        },
                                      },
                                      required: ["topologyKey"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                              },
                              type: "object",
                            },
                          },
                          type: "object",
                        },
                        annotations: {
                          additionalProperties: {
                            type: "string",
                          },
                          type: "object",
                        },
                        configMapInfo: {
                          properties: {
                            configMapName: {
                              type: "string",
                            },
                            resolveKey: {
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        configMaps: {
                          items: {
                            properties: {
                              mountPath: {
                                type: "string",
                              },
                              name: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                        feEnvVars: {
                          items: {
                            properties: {
                              name: {
                                type: "string",
                              },
                              value: {
                                type: "string",
                              },
                              valueFrom: {
                                properties: {
                                  configMapKeyRef: {
                                    properties: {
                                      key: {
                                        type: "string",
                                      },
                                      name: {
                                        type: "string",
                                      },
                                      optional: {
                                        type: "boolean",
                                      },
                                    },
                                    required: ["key"],
                                    type: "object",
                                  },
                                  fieldRef: {
                                    properties: {
                                      apiVersion: {
                                        type: "string",
                                      },
                                      fieldPath: {
                                        type: "string",
                                      },
                                    },
                                    required: ["fieldPath"],
                                    type: "object",
                                  },
                                  resourceFieldRef: {
                                    properties: {
                                      containerName: {
                                        type: "string",
                                      },
                                      divisor: {
                                        anyOf: [
                                          {
                                            type: "integer",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                        pattern:
                                          "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                        "x-kubernetes-int-or-string": true,
                                      },
                                      resource: {
                                        type: "string",
                                      },
                                    },
                                    required: ["resource"],
                                    type: "object",
                                  },
                                  secretKeyRef: {
                                    properties: {
                                      key: {
                                        type: "string",
                                      },
                                      name: {
                                        type: "string",
                                      },
                                      optional: {
                                        type: "boolean",
                                      },
                                    },
                                    required: ["key"],
                                    type: "object",
                                  },
                                },
                                type: "object",
                              },
                            },
                            required: ["name"],
                            type: "object",
                          },
                          type: "array",
                        },
                        fsGroup: {
                          format: "int64",
                          type: "integer",
                        },
                        hostAliases: {
                          items: {
                            properties: {
                              hostnames: {
                                items: {
                                  type: "string",
                                },
                                type: "array",
                              },
                              ip: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                        image: {
                          type: "string",
                        },
                        imagePullSecrets: {
                          items: {
                            properties: {
                              name: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                        limits: {
                          additionalProperties: {
                            anyOf: [
                              {
                                type: "integer",
                              },
                              {
                                type: "string",
                              },
                            ],
                            pattern:
                              "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                            "x-kubernetes-int-or-string": true,
                          },
                          type: "object",
                        },
                        name: {
                          pattern:
                            "[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*",
                          type: "string",
                        },
                        nodeSelector: {
                          additionalProperties: {
                            type: "string",
                          },
                          type: "object",
                        },
                        podLabels: {
                          additionalProperties: {
                            type: "string",
                          },
                          type: "object",
                        },
                        probe: {
                          properties: {
                            initialDelaySeconds: {
                              format: "int32",
                              minimum: 0,
                              type: "integer",
                            },
                            periodSeconds: {
                              format: "int32",
                              minimum: 1,
                              type: "integer",
                            },
                            type: {
                              enum: ["tcp", "command"],
                              type: "string",
                            },
                          },
                          required: ["type"],
                          type: "object",
                        },
                        replicas: {
                          format: "int32",
                          minimum: 0,
                          type: "integer",
                        },
                        requests: {
                          additionalProperties: {
                            anyOf: [
                              {
                                type: "integer",
                              },
                              {
                                type: "string",
                              },
                            ],
                            pattern:
                              "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                            "x-kubernetes-int-or-string": true,
                          },
                          type: "object",
                        },
                        schedulerName: {
                          type: "string",
                        },
                        secrets: {
                          items: {
                            properties: {
                              mountPath: {
                                type: "string",
                              },
                              name: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                        service: {
                          properties: {
                            annotations: {
                              additionalProperties: {
                                type: "string",
                              },
                              type: "object",
                            },
                            loadBalancerIP: {
                              type: "string",
                            },
                            name: {
                              pattern:
                                "[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*",
                              type: "string",
                            },
                            ports: {
                              items: {
                                properties: {
                                  containerPort: {
                                    format: "int32",
                                    type: "integer",
                                  },
                                  name: {
                                    type: "string",
                                  },
                                  nodePort: {
                                    format: "int32",
                                    type: "integer",
                                  },
                                  port: {
                                    format: "int32",
                                    type: "integer",
                                  },
                                },
                                required: ["containerPort", "port"],
                                type: "object",
                              },
                              type: "array",
                            },
                            type: {
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        serviceAccount: {
                          type: "string",
                        },
                        storageVolumes: {
                          items: {
                            properties: {
                              mountPath: {
                                type: "string",
                              },
                              name: {
                                pattern:
                                  "[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*",
                                type: "string",
                              },
                              storageClassName: {
                                type: "string",
                              },
                              storageSize: {
                                pattern:
                                  "(^0|([0-9]*l[.])?[0-9]+((M|G|T|E|P)i))$",
                                type: "string",
                              },
                            },
                            required: ["name", "storageSize"],
                            type: "object",
                          },
                          type: "array",
                        },
                        tolerations: {
                          items: {
                            properties: {
                              effect: {
                                type: "string",
                              },
                              key: {
                                type: "string",
                              },
                              operator: {
                                type: "string",
                              },
                              tolerationSeconds: {
                                format: "int64",
                                type: "integer",
                              },
                              value: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                      },
                      required: ["image"],
                      type: "object",
                    },
                  },
                  type: "object",
                },
                status: {
                  properties: {
                    phase: {
                      type: "string",
                    },
                    starRocksBeStatus: {
                      properties: {
                        creatingInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        failedInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        phase: {
                          type: "string",
                        },
                        reason: {
                          type: "string",
                        },
                        resourceNames: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        runningInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        serviceName: {
                          type: "string",
                        },
                      },
                      required: ["phase"],
                      type: "object",
                    },
                    starRocksCnStatus: {
                      properties: {
                        creatingInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        failedInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        horizontalScaler: {
                          properties: {
                            name: {
                              type: "string",
                            },
                            version: {
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        hpaName: {
                          type: "string",
                        },
                        phase: {
                          type: "string",
                        },
                        reason: {
                          type: "string",
                        },
                        resourceNames: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        runningInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        serviceName: {
                          type: "string",
                        },
                      },
                      required: ["phase"],
                      type: "object",
                    },
                    starRocksFeStatus: {
                      properties: {
                        creatingInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        failedInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        phase: {
                          type: "string",
                        },
                        reason: {
                          type: "string",
                        },
                        resourceNames: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        runningInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        serviceName: {
                          type: "string",
                        },
                      },
                      required: ["phase"],
                      type: "object",
                    },
                  },
                  required: ["phase"],
                  type: "object",
                },
              },
              type: "object",
            },
          },
          served: true,
          storage: true,
          subresources: {
            status: {},
          },
        },
        {
          additionalPrinterColumns: [
            {
              jsonPath: ".status.starRocksFeStatus.phase",
              name: "FeStatus",
              type: "string",
            },
            {
              jsonPath: ".status.starRocksCnStatus.phase",
              name: "CnStatus",
              type: "string",
            },
            {
              jsonPath: ".status.starRocksBeStatus.phase",
              name: "BeStatus",
              type: "string",
            },
          ],
          name: "v1alpha1",
          schema: {
            openAPIV3Schema: {
              properties: {
                apiVersion: {
                  type: "string",
                },
                kind: {
                  type: "string",
                },
                metadata: {
                  type: "object",
                },
                spec: {
                  properties: {
                    serviceAccount: {
                      type: "string",
                    },
                    starRocksBeSpec: {
                      properties: {
                        affinity: {
                          properties: {
                            nodeAffinity: {
                              properties: {
                                preferredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        preference: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchFields: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                          },
                                          type: "object",
                                        },
                                        weight: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      required: ["preference", "weight"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                requiredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    properties: {
                                      nodeSelectorTerms: {
                                        items: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchFields: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                          },
                                          type: "object",
                                        },
                                        type: "array",
                                      },
                                    },
                                    required: ["nodeSelectorTerms"],
                                    type: "object",
                                  },
                              },
                              type: "object",
                            },
                            podAffinity: {
                              properties: {
                                preferredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        podAffinityTerm: {
                                          properties: {
                                            labelSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaceSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaces: {
                                              items: {
                                                type: "string",
                                              },
                                              type: "array",
                                            },
                                            topologyKey: {
                                              type: "string",
                                            },
                                          },
                                          required: ["topologyKey"],
                                          type: "object",
                                        },
                                        weight: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      required: ["podAffinityTerm", "weight"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                requiredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        labelSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaceSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaces: {
                                          items: {
                                            type: "string",
                                          },
                                          type: "array",
                                        },
                                        topologyKey: {
                                          type: "string",
                                        },
                                      },
                                      required: ["topologyKey"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                              },
                              type: "object",
                            },
                            podAntiAffinity: {
                              properties: {
                                preferredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        podAffinityTerm: {
                                          properties: {
                                            labelSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaceSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaces: {
                                              items: {
                                                type: "string",
                                              },
                                              type: "array",
                                            },
                                            topologyKey: {
                                              type: "string",
                                            },
                                          },
                                          required: ["topologyKey"],
                                          type: "object",
                                        },
                                        weight: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      required: ["podAffinityTerm", "weight"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                requiredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        labelSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaceSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaces: {
                                          items: {
                                            type: "string",
                                          },
                                          type: "array",
                                        },
                                        topologyKey: {
                                          type: "string",
                                        },
                                      },
                                      required: ["topologyKey"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                              },
                              type: "object",
                            },
                          },
                          type: "object",
                        },
                        annotations: {
                          additionalProperties: {
                            type: "string",
                          },
                          type: "object",
                        },
                        beEnvVars: {
                          items: {
                            properties: {
                              name: {
                                type: "string",
                              },
                              value: {
                                type: "string",
                              },
                              valueFrom: {
                                properties: {
                                  configMapKeyRef: {
                                    properties: {
                                      key: {
                                        type: "string",
                                      },
                                      name: {
                                        type: "string",
                                      },
                                      optional: {
                                        type: "boolean",
                                      },
                                    },
                                    required: ["key"],
                                    type: "object",
                                  },
                                  fieldRef: {
                                    properties: {
                                      apiVersion: {
                                        type: "string",
                                      },
                                      fieldPath: {
                                        type: "string",
                                      },
                                    },
                                    required: ["fieldPath"],
                                    type: "object",
                                  },
                                  resourceFieldRef: {
                                    properties: {
                                      containerName: {
                                        type: "string",
                                      },
                                      divisor: {
                                        anyOf: [
                                          {
                                            type: "integer",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                        pattern:
                                          "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                        "x-kubernetes-int-or-string": true,
                                      },
                                      resource: {
                                        type: "string",
                                      },
                                    },
                                    required: ["resource"],
                                    type: "object",
                                  },
                                  secretKeyRef: {
                                    properties: {
                                      key: {
                                        type: "string",
                                      },
                                      name: {
                                        type: "string",
                                      },
                                      optional: {
                                        type: "boolean",
                                      },
                                    },
                                    required: ["key"],
                                    type: "object",
                                  },
                                },
                                type: "object",
                              },
                            },
                            required: ["name"],
                            type: "object",
                          },
                          type: "array",
                        },
                        configMapInfo: {
                          properties: {
                            configMapName: {
                              type: "string",
                            },
                            resolveKey: {
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        fsGroup: {
                          format: "int64",
                          type: "integer",
                        },
                        hostAliases: {
                          items: {
                            properties: {
                              hostnames: {
                                items: {
                                  type: "string",
                                },
                                type: "array",
                              },
                              ip: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                        image: {
                          type: "string",
                        },
                        imagePullSecrets: {
                          items: {
                            properties: {
                              name: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                        limits: {
                          additionalProperties: {
                            anyOf: [
                              {
                                type: "integer",
                              },
                              {
                                type: "string",
                              },
                            ],
                            pattern:
                              "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                            "x-kubernetes-int-or-string": true,
                          },
                          type: "object",
                        },
                        name: {
                          pattern:
                            "[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*",
                          type: "string",
                        },
                        nodeSelector: {
                          additionalProperties: {
                            type: "string",
                          },
                          type: "object",
                        },
                        podLabels: {
                          additionalProperties: {
                            type: "string",
                          },
                          type: "object",
                        },
                        probe: {
                          properties: {
                            initialDelaySeconds: {
                              format: "int32",
                              minimum: 0,
                              type: "integer",
                            },
                            periodSeconds: {
                              format: "int32",
                              minimum: 1,
                              type: "integer",
                            },
                            type: {
                              enum: ["tcp", "command"],
                              type: "string",
                            },
                          },
                          required: ["type"],
                          type: "object",
                        },
                        replicaInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        replicas: {
                          format: "int32",
                          type: "integer",
                        },
                        requests: {
                          additionalProperties: {
                            anyOf: [
                              {
                                type: "integer",
                              },
                              {
                                type: "string",
                              },
                            ],
                            pattern:
                              "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                            "x-kubernetes-int-or-string": true,
                          },
                          type: "object",
                        },
                        service: {
                          properties: {
                            loadBalancerIP: {
                              type: "string",
                            },
                            name: {
                              pattern:
                                "[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*",
                              type: "string",
                            },
                            ports: {
                              items: {
                                properties: {
                                  containerPort: {
                                    format: "int32",
                                    type: "integer",
                                  },
                                  name: {
                                    type: "string",
                                  },
                                  nodePort: {
                                    format: "int32",
                                    type: "integer",
                                  },
                                  port: {
                                    format: "int32",
                                    type: "integer",
                                  },
                                },
                                required: ["containerPort", "port"],
                                type: "object",
                              },
                              type: "array",
                            },
                            type: {
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        serviceAccount: {
                          type: "string",
                        },
                        storageVolumes: {
                          items: {
                            properties: {
                              mountPath: {
                                type: "string",
                              },
                              name: {
                                pattern:
                                  "[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*",
                                type: "string",
                              },
                              storageClassName: {
                                type: "string",
                              },
                              storageSize: {
                                pattern:
                                  "(^0|([0-9]*l[.])?[0-9]+((M|G|T|E|P)i))$",
                                type: "string",
                              },
                            },
                            required: ["name", "storageSize"],
                            type: "object",
                          },
                          type: "array",
                        },
                        tolerations: {
                          items: {
                            properties: {
                              effect: {
                                type: "string",
                              },
                              key: {
                                type: "string",
                              },
                              operator: {
                                type: "string",
                              },
                              tolerationSeconds: {
                                format: "int64",
                                type: "integer",
                              },
                              value: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                      },
                      required: ["image"],
                      type: "object",
                    },
                    starRocksCnSpec: {
                      properties: {
                        affinity: {
                          properties: {
                            nodeAffinity: {
                              properties: {
                                preferredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        preference: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchFields: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                          },
                                          type: "object",
                                        },
                                        weight: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      required: ["preference", "weight"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                requiredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    properties: {
                                      nodeSelectorTerms: {
                                        items: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchFields: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                          },
                                          type: "object",
                                        },
                                        type: "array",
                                      },
                                    },
                                    required: ["nodeSelectorTerms"],
                                    type: "object",
                                  },
                              },
                              type: "object",
                            },
                            podAffinity: {
                              properties: {
                                preferredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        podAffinityTerm: {
                                          properties: {
                                            labelSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaceSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaces: {
                                              items: {
                                                type: "string",
                                              },
                                              type: "array",
                                            },
                                            topologyKey: {
                                              type: "string",
                                            },
                                          },
                                          required: ["topologyKey"],
                                          type: "object",
                                        },
                                        weight: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      required: ["podAffinityTerm", "weight"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                requiredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        labelSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaceSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaces: {
                                          items: {
                                            type: "string",
                                          },
                                          type: "array",
                                        },
                                        topologyKey: {
                                          type: "string",
                                        },
                                      },
                                      required: ["topologyKey"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                              },
                              type: "object",
                            },
                            podAntiAffinity: {
                              properties: {
                                preferredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        podAffinityTerm: {
                                          properties: {
                                            labelSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaceSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaces: {
                                              items: {
                                                type: "string",
                                              },
                                              type: "array",
                                            },
                                            topologyKey: {
                                              type: "string",
                                            },
                                          },
                                          required: ["topologyKey"],
                                          type: "object",
                                        },
                                        weight: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      required: ["podAffinityTerm", "weight"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                requiredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        labelSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaceSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaces: {
                                          items: {
                                            type: "string",
                                          },
                                          type: "array",
                                        },
                                        topologyKey: {
                                          type: "string",
                                        },
                                      },
                                      required: ["topologyKey"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                              },
                              type: "object",
                            },
                          },
                          type: "object",
                        },
                        annotations: {
                          additionalProperties: {
                            type: "string",
                          },
                          type: "object",
                        },
                        autoScalingPolicy: {
                          properties: {
                            hpaPolicy: {
                              properties: {
                                behavior: {
                                  properties: {
                                    scaleDown: {
                                      properties: {
                                        policies: {
                                          items: {
                                            properties: {
                                              periodSeconds: {
                                                format: "int32",
                                                type: "integer",
                                              },
                                              type: {
                                                type: "string",
                                              },
                                              value: {
                                                format: "int32",
                                                type: "integer",
                                              },
                                            },
                                            required: [
                                              "periodSeconds",
                                              "type",
                                              "value",
                                            ],
                                            type: "object",
                                          },
                                          type: "array",
                                        },
                                        selectPolicy: {
                                          type: "string",
                                        },
                                        stabilizationWindowSeconds: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      type: "object",
                                    },
                                    scaleUp: {
                                      properties: {
                                        policies: {
                                          items: {
                                            properties: {
                                              periodSeconds: {
                                                format: "int32",
                                                type: "integer",
                                              },
                                              type: {
                                                type: "string",
                                              },
                                              value: {
                                                format: "int32",
                                                type: "integer",
                                              },
                                            },
                                            required: [
                                              "periodSeconds",
                                              "type",
                                              "value",
                                            ],
                                            type: "object",
                                          },
                                          type: "array",
                                        },
                                        selectPolicy: {
                                          type: "string",
                                        },
                                        stabilizationWindowSeconds: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      type: "object",
                                    },
                                  },
                                  type: "object",
                                },
                                metrics: {
                                  items: {
                                    properties: {
                                      containerResource: {
                                        properties: {
                                          container: {
                                            type: "string",
                                          },
                                          name: {
                                            type: "string",
                                          },
                                          target: {
                                            properties: {
                                              averageUtilization: {
                                                format: "int32",
                                                type: "integer",
                                              },
                                              averageValue: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                              type: {
                                                type: "string",
                                              },
                                              value: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                            },
                                            required: ["type"],
                                            type: "object",
                                          },
                                        },
                                        required: [
                                          "container",
                                          "name",
                                          "target",
                                        ],
                                        type: "object",
                                      },
                                      external: {
                                        properties: {
                                          metric: {
                                            properties: {
                                              name: {
                                                type: "string",
                                              },
                                              selector: {
                                                properties: {
                                                  matchExpressions: {
                                                    items: {
                                                      properties: {
                                                        key: {
                                                          type: "string",
                                                        },
                                                        operator: {
                                                          type: "string",
                                                        },
                                                        values: {
                                                          items: {
                                                            type: "string",
                                                          },
                                                          type: "array",
                                                        },
                                                      },
                                                      required: [
                                                        "key",
                                                        "operator",
                                                      ],
                                                      type: "object",
                                                    },
                                                    type: "array",
                                                  },
                                                  matchLabels: {
                                                    additionalProperties: {
                                                      type: "string",
                                                    },
                                                    type: "object",
                                                  },
                                                },
                                                type: "object",
                                              },
                                            },
                                            required: ["name"],
                                            type: "object",
                                          },
                                          target: {
                                            properties: {
                                              averageUtilization: {
                                                format: "int32",
                                                type: "integer",
                                              },
                                              averageValue: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                              type: {
                                                type: "string",
                                              },
                                              value: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                            },
                                            required: ["type"],
                                            type: "object",
                                          },
                                        },
                                        required: ["metric", "target"],
                                        type: "object",
                                      },
                                      object: {
                                        properties: {
                                          describedObject: {
                                            properties: {
                                              apiVersion: {
                                                type: "string",
                                              },
                                              kind: {
                                                type: "string",
                                              },
                                              name: {
                                                type: "string",
                                              },
                                            },
                                            required: ["kind", "name"],
                                            type: "object",
                                          },
                                          metric: {
                                            properties: {
                                              name: {
                                                type: "string",
                                              },
                                              selector: {
                                                properties: {
                                                  matchExpressions: {
                                                    items: {
                                                      properties: {
                                                        key: {
                                                          type: "string",
                                                        },
                                                        operator: {
                                                          type: "string",
                                                        },
                                                        values: {
                                                          items: {
                                                            type: "string",
                                                          },
                                                          type: "array",
                                                        },
                                                      },
                                                      required: [
                                                        "key",
                                                        "operator",
                                                      ],
                                                      type: "object",
                                                    },
                                                    type: "array",
                                                  },
                                                  matchLabels: {
                                                    additionalProperties: {
                                                      type: "string",
                                                    },
                                                    type: "object",
                                                  },
                                                },
                                                type: "object",
                                              },
                                            },
                                            required: ["name"],
                                            type: "object",
                                          },
                                          target: {
                                            properties: {
                                              averageUtilization: {
                                                format: "int32",
                                                type: "integer",
                                              },
                                              averageValue: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                              type: {
                                                type: "string",
                                              },
                                              value: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                            },
                                            required: ["type"],
                                            type: "object",
                                          },
                                        },
                                        required: [
                                          "describedObject",
                                          "metric",
                                          "target",
                                        ],
                                        type: "object",
                                      },
                                      pods: {
                                        properties: {
                                          metric: {
                                            properties: {
                                              name: {
                                                type: "string",
                                              },
                                              selector: {
                                                properties: {
                                                  matchExpressions: {
                                                    items: {
                                                      properties: {
                                                        key: {
                                                          type: "string",
                                                        },
                                                        operator: {
                                                          type: "string",
                                                        },
                                                        values: {
                                                          items: {
                                                            type: "string",
                                                          },
                                                          type: "array",
                                                        },
                                                      },
                                                      required: [
                                                        "key",
                                                        "operator",
                                                      ],
                                                      type: "object",
                                                    },
                                                    type: "array",
                                                  },
                                                  matchLabels: {
                                                    additionalProperties: {
                                                      type: "string",
                                                    },
                                                    type: "object",
                                                  },
                                                },
                                                type: "object",
                                              },
                                            },
                                            required: ["name"],
                                            type: "object",
                                          },
                                          target: {
                                            properties: {
                                              averageUtilization: {
                                                format: "int32",
                                                type: "integer",
                                              },
                                              averageValue: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                              type: {
                                                type: "string",
                                              },
                                              value: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                            },
                                            required: ["type"],
                                            type: "object",
                                          },
                                        },
                                        required: ["metric", "target"],
                                        type: "object",
                                      },
                                      resource: {
                                        properties: {
                                          name: {
                                            type: "string",
                                          },
                                          target: {
                                            properties: {
                                              averageUtilization: {
                                                format: "int32",
                                                type: "integer",
                                              },
                                              averageValue: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                              type: {
                                                type: "string",
                                              },
                                              value: {
                                                anyOf: [
                                                  {
                                                    type: "integer",
                                                  },
                                                  {
                                                    type: "string",
                                                  },
                                                ],
                                                pattern:
                                                  "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                                "x-kubernetes-int-or-string":
                                                  true,
                                              },
                                            },
                                            required: ["type"],
                                            type: "object",
                                          },
                                        },
                                        required: ["name", "target"],
                                        type: "object",
                                      },
                                      type: {
                                        type: "string",
                                      },
                                    },
                                    required: ["type"],
                                    type: "object",
                                  },
                                  type: "array",
                                },
                              },
                              type: "object",
                            },
                            maxReplicas: {
                              format: "int32",
                              type: "integer",
                            },
                            minReplicas: {
                              format: "int32",
                              type: "integer",
                            },
                            version: {
                              default: "v2beta2",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        cnEnvVars: {
                          items: {
                            properties: {
                              name: {
                                type: "string",
                              },
                              value: {
                                type: "string",
                              },
                              valueFrom: {
                                properties: {
                                  configMapKeyRef: {
                                    properties: {
                                      key: {
                                        type: "string",
                                      },
                                      name: {
                                        type: "string",
                                      },
                                      optional: {
                                        type: "boolean",
                                      },
                                    },
                                    required: ["key"],
                                    type: "object",
                                  },
                                  fieldRef: {
                                    properties: {
                                      apiVersion: {
                                        type: "string",
                                      },
                                      fieldPath: {
                                        type: "string",
                                      },
                                    },
                                    required: ["fieldPath"],
                                    type: "object",
                                  },
                                  resourceFieldRef: {
                                    properties: {
                                      containerName: {
                                        type: "string",
                                      },
                                      divisor: {
                                        anyOf: [
                                          {
                                            type: "integer",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                        pattern:
                                          "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                        "x-kubernetes-int-or-string": true,
                                      },
                                      resource: {
                                        type: "string",
                                      },
                                    },
                                    required: ["resource"],
                                    type: "object",
                                  },
                                  secretKeyRef: {
                                    properties: {
                                      key: {
                                        type: "string",
                                      },
                                      name: {
                                        type: "string",
                                      },
                                      optional: {
                                        type: "boolean",
                                      },
                                    },
                                    required: ["key"],
                                    type: "object",
                                  },
                                },
                                type: "object",
                              },
                            },
                            required: ["name"],
                            type: "object",
                          },
                          type: "array",
                        },
                        configMapInfo: {
                          properties: {
                            configMapName: {
                              type: "string",
                            },
                            resolveKey: {
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        fsGroup: {
                          format: "int64",
                          type: "integer",
                        },
                        hostAliases: {
                          items: {
                            properties: {
                              hostnames: {
                                items: {
                                  type: "string",
                                },
                                type: "array",
                              },
                              ip: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                        image: {
                          type: "string",
                        },
                        imagePullSecrets: {
                          items: {
                            properties: {
                              name: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                        limits: {
                          additionalProperties: {
                            anyOf: [
                              {
                                type: "integer",
                              },
                              {
                                type: "string",
                              },
                            ],
                            pattern:
                              "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                            "x-kubernetes-int-or-string": true,
                          },
                          type: "object",
                        },
                        name: {
                          pattern:
                            "[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*",
                          type: "string",
                        },
                        nodeSelector: {
                          additionalProperties: {
                            type: "string",
                          },
                          type: "object",
                        },
                        podLabels: {
                          additionalProperties: {
                            type: "string",
                          },
                          type: "object",
                        },
                        probe: {
                          properties: {
                            initialDelaySeconds: {
                              format: "int32",
                              minimum: 0,
                              type: "integer",
                            },
                            periodSeconds: {
                              format: "int32",
                              minimum: 1,
                              type: "integer",
                            },
                            type: {
                              enum: ["tcp", "command"],
                              type: "string",
                            },
                          },
                          required: ["type"],
                          type: "object",
                        },
                        replicas: {
                          format: "int32",
                          minimum: 0,
                          type: "integer",
                        },
                        requests: {
                          additionalProperties: {
                            anyOf: [
                              {
                                type: "integer",
                              },
                              {
                                type: "string",
                              },
                            ],
                            pattern:
                              "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                            "x-kubernetes-int-or-string": true,
                          },
                          type: "object",
                        },
                        service: {
                          properties: {
                            loadBalancerIP: {
                              type: "string",
                            },
                            name: {
                              pattern:
                                "[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*",
                              type: "string",
                            },
                            ports: {
                              items: {
                                properties: {
                                  containerPort: {
                                    format: "int32",
                                    type: "integer",
                                  },
                                  name: {
                                    type: "string",
                                  },
                                  nodePort: {
                                    format: "int32",
                                    type: "integer",
                                  },
                                  port: {
                                    format: "int32",
                                    type: "integer",
                                  },
                                },
                                required: ["containerPort", "port"],
                                type: "object",
                              },
                              type: "array",
                            },
                            type: {
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        serviceAccount: {
                          type: "string",
                        },
                        tolerations: {
                          items: {
                            properties: {
                              effect: {
                                type: "string",
                              },
                              key: {
                                type: "string",
                              },
                              operator: {
                                type: "string",
                              },
                              tolerationSeconds: {
                                format: "int64",
                                type: "integer",
                              },
                              value: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                      },
                      required: ["image"],
                      type: "object",
                    },
                    starRocksFeSpec: {
                      properties: {
                        affinity: {
                          properties: {
                            nodeAffinity: {
                              properties: {
                                preferredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        preference: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchFields: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                          },
                                          type: "object",
                                        },
                                        weight: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      required: ["preference", "weight"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                requiredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    properties: {
                                      nodeSelectorTerms: {
                                        items: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchFields: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                          },
                                          type: "object",
                                        },
                                        type: "array",
                                      },
                                    },
                                    required: ["nodeSelectorTerms"],
                                    type: "object",
                                  },
                              },
                              type: "object",
                            },
                            podAffinity: {
                              properties: {
                                preferredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        podAffinityTerm: {
                                          properties: {
                                            labelSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaceSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaces: {
                                              items: {
                                                type: "string",
                                              },
                                              type: "array",
                                            },
                                            topologyKey: {
                                              type: "string",
                                            },
                                          },
                                          required: ["topologyKey"],
                                          type: "object",
                                        },
                                        weight: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      required: ["podAffinityTerm", "weight"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                requiredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        labelSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaceSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaces: {
                                          items: {
                                            type: "string",
                                          },
                                          type: "array",
                                        },
                                        topologyKey: {
                                          type: "string",
                                        },
                                      },
                                      required: ["topologyKey"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                              },
                              type: "object",
                            },
                            podAntiAffinity: {
                              properties: {
                                preferredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        podAffinityTerm: {
                                          properties: {
                                            labelSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaceSelector: {
                                              properties: {
                                                matchExpressions: {
                                                  items: {
                                                    properties: {
                                                      key: {
                                                        type: "string",
                                                      },
                                                      operator: {
                                                        type: "string",
                                                      },
                                                      values: {
                                                        items: {
                                                          type: "string",
                                                        },
                                                        type: "array",
                                                      },
                                                    },
                                                    required: [
                                                      "key",
                                                      "operator",
                                                    ],
                                                    type: "object",
                                                  },
                                                  type: "array",
                                                },
                                                matchLabels: {
                                                  additionalProperties: {
                                                    type: "string",
                                                  },
                                                  type: "object",
                                                },
                                              },
                                              type: "object",
                                            },
                                            namespaces: {
                                              items: {
                                                type: "string",
                                              },
                                              type: "array",
                                            },
                                            topologyKey: {
                                              type: "string",
                                            },
                                          },
                                          required: ["topologyKey"],
                                          type: "object",
                                        },
                                        weight: {
                                          format: "int32",
                                          type: "integer",
                                        },
                                      },
                                      required: ["podAffinityTerm", "weight"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                                requiredDuringSchedulingIgnoredDuringExecution:
                                  {
                                    items: {
                                      properties: {
                                        labelSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaceSelector: {
                                          properties: {
                                            matchExpressions: {
                                              items: {
                                                properties: {
                                                  key: {
                                                    type: "string",
                                                  },
                                                  operator: {
                                                    type: "string",
                                                  },
                                                  values: {
                                                    items: {
                                                      type: "string",
                                                    },
                                                    type: "array",
                                                  },
                                                },
                                                required: ["key", "operator"],
                                                type: "object",
                                              },
                                              type: "array",
                                            },
                                            matchLabels: {
                                              additionalProperties: {
                                                type: "string",
                                              },
                                              type: "object",
                                            },
                                          },
                                          type: "object",
                                        },
                                        namespaces: {
                                          items: {
                                            type: "string",
                                          },
                                          type: "array",
                                        },
                                        topologyKey: {
                                          type: "string",
                                        },
                                      },
                                      required: ["topologyKey"],
                                      type: "object",
                                    },
                                    type: "array",
                                  },
                              },
                              type: "object",
                            },
                          },
                          type: "object",
                        },
                        annotations: {
                          additionalProperties: {
                            type: "string",
                          },
                          type: "object",
                        },
                        configMapInfo: {
                          properties: {
                            configMapName: {
                              type: "string",
                            },
                            resolveKey: {
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        feEnvVars: {
                          items: {
                            properties: {
                              name: {
                                type: "string",
                              },
                              value: {
                                type: "string",
                              },
                              valueFrom: {
                                properties: {
                                  configMapKeyRef: {
                                    properties: {
                                      key: {
                                        type: "string",
                                      },
                                      name: {
                                        type: "string",
                                      },
                                      optional: {
                                        type: "boolean",
                                      },
                                    },
                                    required: ["key"],
                                    type: "object",
                                  },
                                  fieldRef: {
                                    properties: {
                                      apiVersion: {
                                        type: "string",
                                      },
                                      fieldPath: {
                                        type: "string",
                                      },
                                    },
                                    required: ["fieldPath"],
                                    type: "object",
                                  },
                                  resourceFieldRef: {
                                    properties: {
                                      containerName: {
                                        type: "string",
                                      },
                                      divisor: {
                                        anyOf: [
                                          {
                                            type: "integer",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                        pattern:
                                          "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                                        "x-kubernetes-int-or-string": true,
                                      },
                                      resource: {
                                        type: "string",
                                      },
                                    },
                                    required: ["resource"],
                                    type: "object",
                                  },
                                  secretKeyRef: {
                                    properties: {
                                      key: {
                                        type: "string",
                                      },
                                      name: {
                                        type: "string",
                                      },
                                      optional: {
                                        type: "boolean",
                                      },
                                    },
                                    required: ["key"],
                                    type: "object",
                                  },
                                },
                                type: "object",
                              },
                            },
                            required: ["name"],
                            type: "object",
                          },
                          type: "array",
                        },
                        fsGroup: {
                          format: "int64",
                          type: "integer",
                        },
                        hostAliases: {
                          items: {
                            properties: {
                              hostnames: {
                                items: {
                                  type: "string",
                                },
                                type: "array",
                              },
                              ip: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                        image: {
                          type: "string",
                        },
                        imagePullSecrets: {
                          items: {
                            properties: {
                              name: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                        limits: {
                          additionalProperties: {
                            anyOf: [
                              {
                                type: "integer",
                              },
                              {
                                type: "string",
                              },
                            ],
                            pattern:
                              "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                            "x-kubernetes-int-or-string": true,
                          },
                          type: "object",
                        },
                        name: {
                          pattern:
                            "[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*",
                          type: "string",
                        },
                        nodeSelector: {
                          additionalProperties: {
                            type: "string",
                          },
                          type: "object",
                        },
                        podLabels: {
                          additionalProperties: {
                            type: "string",
                          },
                          type: "object",
                        },
                        probe: {
                          properties: {
                            initialDelaySeconds: {
                              format: "int32",
                              minimum: 0,
                              type: "integer",
                            },
                            periodSeconds: {
                              format: "int32",
                              minimum: 1,
                              type: "integer",
                            },
                            type: {
                              enum: ["tcp", "command"],
                              type: "string",
                            },
                          },
                          required: ["type"],
                          type: "object",
                        },
                        replicas: {
                          format: "int32",
                          type: "integer",
                        },
                        requests: {
                          additionalProperties: {
                            anyOf: [
                              {
                                type: "integer",
                              },
                              {
                                type: "string",
                              },
                            ],
                            pattern:
                              "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$",
                            "x-kubernetes-int-or-string": true,
                          },
                          type: "object",
                        },
                        service: {
                          properties: {
                            loadBalancerIP: {
                              type: "string",
                            },
                            name: {
                              pattern:
                                "[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*",
                              type: "string",
                            },
                            ports: {
                              items: {
                                properties: {
                                  containerPort: {
                                    format: "int32",
                                    type: "integer",
                                  },
                                  name: {
                                    type: "string",
                                  },
                                  nodePort: {
                                    format: "int32",
                                    type: "integer",
                                  },
                                  port: {
                                    format: "int32",
                                    type: "integer",
                                  },
                                },
                                required: ["containerPort", "port"],
                                type: "object",
                              },
                              type: "array",
                            },
                            type: {
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        serviceAccount: {
                          type: "string",
                        },
                        storageVolumes: {
                          items: {
                            properties: {
                              mountPath: {
                                type: "string",
                              },
                              name: {
                                pattern:
                                  "[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*",
                                type: "string",
                              },
                              storageClassName: {
                                type: "string",
                              },
                              storageSize: {
                                pattern:
                                  "(^0|([0-9]*l[.])?[0-9]+((M|G|T|E|P)i))$",
                                type: "string",
                              },
                            },
                            required: ["name", "storageSize"],
                            type: "object",
                          },
                          type: "array",
                        },
                        tolerations: {
                          items: {
                            properties: {
                              effect: {
                                type: "string",
                              },
                              key: {
                                type: "string",
                              },
                              operator: {
                                type: "string",
                              },
                              tolerationSeconds: {
                                format: "int64",
                                type: "integer",
                              },
                              value: {
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          type: "array",
                        },
                      },
                      required: ["image"],
                      type: "object",
                    },
                  },
                  type: "object",
                },
                status: {
                  properties: {
                    phase: {
                      type: "string",
                    },
                    starRocksBeStatus: {
                      properties: {
                        creatingInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        failedInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        phase: {
                          type: "string",
                        },
                        reason: {
                          type: "string",
                        },
                        resourceNames: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        runningInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        serviceName: {
                          type: "string",
                        },
                      },
                      required: ["phase"],
                      type: "object",
                    },
                    starRocksCnStatus: {
                      properties: {
                        creatingInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        failedInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        horizontalScaler: {
                          properties: {
                            name: {
                              type: "string",
                            },
                            version: {
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        hpaName: {
                          type: "string",
                        },
                        phase: {
                          type: "string",
                        },
                        reason: {
                          type: "string",
                        },
                        resourceNames: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        runningInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        serviceName: {
                          type: "string",
                        },
                      },
                      required: ["phase"],
                      type: "object",
                    },
                    starRocksFeStatus: {
                      properties: {
                        creatingInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        failedInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        phase: {
                          type: "string",
                        },
                        reason: {
                          type: "string",
                        },
                        resourceNames: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        runningInstances: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        serviceName: {
                          type: "string",
                        },
                      },
                      required: ["phase"],
                      type: "object",
                    },
                  },
                  required: ["phase"],
                  type: "object",
                },
              },
              type: "object",
            },
          },
          served: true,
          storage: false,
          subresources: {
            status: {},
          },
        },
      ],
    },
    status: {
      acceptedNames: {
        kind: "",
        plural: "",
      },
      conditions: [],
      storedVersions: [],
    },
  },
};

export default crd;
