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

cd app/
echo "${white}[TEST] ${cyan}running tests..."
res=$(npm-cache install && npm test)
rc=$?

if [[ $rc != 0 ]]; then
  echo "${white}[TEST] ${red}failure"
  echo $res
  exit $rc
fi

echo "${white}[TEST] ${green}success"
