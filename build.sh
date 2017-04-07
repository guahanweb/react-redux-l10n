#!/usr/bin/env bash
PROJECT=$1;
VERSION=$2;
BUILD_DIR=$3;

# create docker image
tag=$PROJECT":"$VERSION
echo "DOCKER: building tag $tag..."
res=$(docker build -t $tag $BUILD_DIR)
