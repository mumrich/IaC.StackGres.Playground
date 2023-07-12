#!/bin/bash
cat >base.yaml

cat >deployment-patch.yaml <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ingress-nginx-controller
  namespace: ingress-nginx
spec:
  template:
    spec:
      containers:
        - args:
            - --enable-ssl-passthrough
EOF

cat >kustomization.yaml <<EOF
resources:
  - base.yaml
patchesStrategicMerge:
  - deployment-patch.yaml
EOF

exec kubectl kustomize
