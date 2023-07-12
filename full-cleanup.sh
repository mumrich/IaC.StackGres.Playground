#!/bin/bash

echo "*** Delete cluster..."
k3d cluster delete MyCluster

echo "*** Remove all tfstate-files..."
rm -f cdktf/*.tfstate cdktf/*.tfstate.backup

echo "*** Remove cdktf.out folder..."
rm -rf cdktf/cdktf.out
