#!/usr/bin/env bash
if test -t 1; then
  ncolors=$(tput colors)

  if test -n "$ncolors" && test $ncolors -ge 8; then
    bold="$(tput bold)"
    underline="$(tput smul)"
    standout="$(tput smso)"
    normal="$(tput sgr0)"
    black="$(tput setaf 0)"
    red="$(tput setaf 1)"
    green="$(tput setaf 2)"
    yellow="$(tput setaf 3)"
    blue="$(tput setaf 4)"
    magenta="$(tput setaf 5)"
    cyan="$(tput setaf 6)"
    white="$(tput setaf 7)"
  fi
fi

function domsg() {
    msg=$1
    echo "${white}[BUILD] ${normal}${msg}"
}

case "$1" in
    build)
        tag=$2
        domsg "${cyan}building docker image"
        res=$(docker build -t $tag .)
        rc=$?

        if [[ $rc != 0 ]]; then
            domsg "${red}failure"
            echo $res
            exit $rc
        fi

        domsg "${green}done"
        ;;

    push)
        tag=$2
        host=$3
        user=$SEGDS_REGISTRY_USERNAME
        pass=$SEGDS_REGISTRY_PASSWORD

        # log in to secure docker registry
        domsg "${cyan}logging into registry"
        res=$(docker login -u $SEGDS_REGISTRY_USERNAME -p $SEGDS_REGISTRY_PASSWORD $host)
        rc=$?

        if [[ $rc != 0 ]]; then
            domsg "${red}failure"
            echo $res
            exit $rc
        fi

        domsg "${cyan}pushing docker image"
        res=$(docker push $tag)
        rc=$?

        if [[ $rc != 0 ]]; then
            domsg "${red}failure"
            echo $res
            exit $rc
        fi

        domsg "${green}done"
        ;;
    *)
        domsg "${yellow}usage: $0 {build|push}"
        exit 1
esac
