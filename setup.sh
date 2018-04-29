#!/usr/bin/env bash

# Build the rms-sparkline-inline web component
#
echo "Build the rms-sparkline-inline web component"
pushd rms-sparkline-inline
rm -rf node_modules
npm install
npm run test
npm run prepare
popd

# Build the rms-sparkline-bar-chart web component
#
echo "Build the rms-sparkline-bar-chart web component"
pushd rms-sparkline-bar-chart
rm -rf node_modules
npm install
npm run test
npm run prepare
popd
