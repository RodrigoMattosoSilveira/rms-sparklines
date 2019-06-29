#!/usr/bin/env bash

set -e

echo Publihing "$(ls dist/sparklines | grep tgz)"

get_version() {
   cd ./dist/rmstek-sparklines
   PACKAGE_VERSION=$(npx -c 'echo "$npm_package_version"')
   cd ../..
   return 0
}

get_version

is_travis_branch_master() {
   if [[ ${TRAVIS_BRANCH} = master ]]; then
      echo "✅ Travis branch is master"
      return 0
   else
      echo "🚫 Travis branch ${TRAVIS_BRANCH} is not master"
      return 1
   fi
}

is_feature_branch_version() {
   # use the component version
   regex='^[[:digit:]]+(\.[[:digit:]]+)+(-[[:alnum:]]+)+'
   if [[ ${PACKAGE_VERSION} =~ $regex ]]; then
      echo "✅ Version ${PACKAGE_VERSION} is a feature branch version"
      return 0
   else
      echo "🚫 Version ${PACKAGE_VERSION} is not a feature branch version"
      return 1
   fi
}

if is_travis_branch_master || is_feature_branch_version; then
   yarn lib:ready
   # yarn does not have an non interactive way do do this
   npm publish dist/rmstek-sparklines/$1 --access public
fi
