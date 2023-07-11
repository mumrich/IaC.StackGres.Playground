#!/bin/bash

# exit when any command fails
set -e

CLUSTERNAME=MyCluster
SERVERS=1
AGENTS=2

k3d cluster create $CLUSTERNAME \
    --servers $SERVERS \
    --agents $AGENTS \
    --k3s-arg "--disable=traefik@server:*" \
    --port "8081:80@loadbalancer"
