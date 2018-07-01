#!/usr/bin/env bash

declare -a webComponents=("rms-sparkline-inline" \
"rms-sparkline-bar-chart" \
"util-lib"
)

for webComponent in "${webComponents[@]}"
do
    echo "Initializing " + $webComponent
    pushd $webComponent
    rm -rf node_modules
    npm install
    npm run prepare
    npm run test
    popd
done