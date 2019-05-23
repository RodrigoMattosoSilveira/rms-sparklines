#!/usr/bin/env bash

# Usage
# TBD
#
set -ev
echo Taging: $TRAVIS_BRANCH
# Set the tag to be the package.json version
# For branches other than master, append an unique value to
# provent build failures.
GITTAG=v$(npx -c 'echo "$npm_package_version"')
if [ $TRAVIS_BRANCH != "master" ]; then
  GITTAG=$(echo $GITTAG.$TRAVIS_BUILD_NUMBER)
fi
echo Taging: $TRAVIS_BRANCH: $GITTAG

# Using annotated tags; required to include tag to prevent build from running
# when checking in the tag [https://circleci.com/docs/2.0/skip-build/]
git tag -a $GITTAG -m "Pull Request Tag [skip build]"
git push origin $GITTAG
