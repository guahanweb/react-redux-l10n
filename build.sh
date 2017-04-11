#!/usr/bin/env bash
PROJECT=$1;
VERSION=$2;
BUILD_DIR=$3;

# log into docker
echo "DOCKER: logging into registry..."
login=$(docker login -u $SEGDS_REGISTRY_USERNAME -p $SEGDS_REGISTRY_PASSWORD segds-docker-registry.lns.starwave.com)

# create docker image
tag=$PROJECT":"$VERSION
echo "DOCKER: building tag $tag..."
res=$(docker build -t $PROJECT:$VERSION)

# push docker image
echo "DOCKER: pushing new image..."
push=$(docker push $PROJECT)
