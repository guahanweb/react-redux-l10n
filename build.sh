#!/usr/bin/env bash

# create docker image
docker build -t "'"$PROJECT_NAME"-"$PROJECT_VERSION"'" ./Dockerfile
