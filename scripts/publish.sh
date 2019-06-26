#!/usr/bin/env bash

set -e

echo Publihing "$(ls dist/sparklines | grep tgz)"

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
  version=$(npx -c 'echo "$npm_package_version"')
  regex='^[[:digit:]]+(\.[[:digit:]]+)+(-[[:alnum:]]+)+'
  if [[ ${version} =~ $regex ]]; then
    echo "✅ Version ${version} is a feature branch version"
    return 0
  else
    echo "🚫 Version ${version} is not a feature branch version"
    return 1
  fi
}

if is_travis_branch_master || is_feature_branch_version; then
   yarn lib:ready
   # yarn does not have an non interactive way do 
   npm publish dist/sparklines/$1 --access public
fi
