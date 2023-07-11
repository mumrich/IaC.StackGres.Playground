#!/bin/bash

# exit when any command fails
set -e

PROFILE=multikube
CLUSTER_DOMAIN_NAME="$PROFILE"
NBR_NODES=3

# setup + start new cluster
minikube start -p $PROFILE --nodes $NBR_NODES

# set default profile because some minikube commands have poor support for the '-p' flag...
minikube profile $PROFILE

# needed for basic insight
minikube addons enable metrics-server

# Default host-path volume provisioner doesn’t support multi-node clusters, csi-hostpath-driver does.
minikube addons enable volumesnapshots
minikube addons enable csi-hostpath-driver

# use it as a default storage class for the dynamic volume claims
minikube addons disable storage-provisioner
minikube addons disable default-storageclass
minikube kubectl -- patch storageclass csi-hostpath-sc \
    -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'

# dns service for ingress controllers running on cluster
minikube addons enable ingress
minikube addons enable ingress-dns
sudo pwsh \
    -File "./add-dns-server-to-host.ps1" \
    -cluster_domain_name "$CLUSTER_DOMAIN_NAME" \
    -name_servers "$(minikube ip)"

# report on addons
minikube addons list -d

# minikube kubectl -- apply -f https://raw.githubusercontent.com/kubernetes/minikube/master/deploy/addons/ingress-dns/example/example.yaml
