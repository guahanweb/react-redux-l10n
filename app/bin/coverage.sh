#!/bin/bash
set -e

# cleanup from last run
rm -rf coverage

# run coverage report with tests
nyc --reporter=json npm test

# rename output file
mv coverage/coverage-final.json coverage/coverage.json

# generate HTML output for visual reporting
istanbul report lcov text
