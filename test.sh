#!/usr/bin/env bash
cd app/
echo "Running tests..."
res=$(npm i && npm test)
rc=$?

if [[ $rc != 0 ]]; then
  echo "TESTS FAILED!"
  echo $res
  exit $rc
fi
