#!/bin/bash

set -e

cd cdktf

echo "*** Deploying k3d cluster..."
npm run deploy-k3d-cluster

echo "*** Deploying stackgres operator..."
npm run deploy-stackgres-operator

cd ..
