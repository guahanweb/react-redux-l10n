#!/usr/bin/env bash
cmd=$1

case "$1" in
    build)
        tag=$2
        echo "Building docker image..."
        res=$(docker build -t $tag .)
        rc=$?

        if [[ $rc != 0 ]]; then
            echo "ERROR ENCOUNTERED:"
            echo $res
            exit $rc
        fi
        ;;

    push)
        tag=$2
        host=$3
        user=$SEGDS_REGISTRY_USERNAME
        pass=$SEGDS_REGISTRY_PASSWORD

        # log in to secure docker registry
        echo "Logging into registry..."
        res=$(docker login -u $SEGDS_REGISTRY_USERNAME -p $SEGDS_REGISTRY_PASSWORD $host)
        rc=$?

        if [[ $rc != 0 ]]; then
            echo "COULD NOT LOG INTO $host"
            echo $res
            exit $rc
        fi

        echo "Pushing newly built image..."
        res=$(docker push $tag)
        rc=$?

        if [[ $rc != 0 ]]; then
            echo "COULD NOT PUSH IMAGE"
            echo $res
            exit $rc
        fi
        ;;
    *)
        echo $"Usage: $0 {build|push}"
        exit 1
esac
