#!/usr/bin/env bash

set -e

declare -a webComponents=("util-lib" \
"rms-sparkline-inline" \
"rms-sparkline-bar-chart" \
"rms-sparkline-boxplot"
)

# Usage
# - compile components: $ ./setup.sh
# - install packages and compile components: $ ./setup.sh -i
# - compile components and run tests: $ ./setup.sh -u
# - install packages, compile components, and run tests: $ ./setup.sh -iu

# Process script arguments and set control variables
#
install="no"
unitTests="no"
echo "Process script arguments and set control variables"
while getopts  "iu" flag
do
  echo "$flag" $OPTIND $OPTARG

  if [ $flag = "i" ];
    then
      install="yes"
  fi


  if [ $flag = "u" ];
    then
      unitTests="yes"
  fi

done

for webComponent in "${webComponents[@]}"
do
    echo "Initializing " + $webComponent
    pushd $webComponent
    if [ $install = "yes" ];
      then
        echo "Installing packackages"
        rm -rf node_modules
        npm install
      else
        echo "We WILL NOT install packages"
    fi
    npm run prepare
    if [ $unitTests = "yes" ];
      then
        echo "Running unit tests"
         npm run test
      else
        echo "We WILL NOT run unit tests"
    fi
    popd
done