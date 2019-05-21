#!/usr/bin/env bash

# Usage
# TBD
#
if [ $CIRCLE_BRANCH == $DEPLOY_BRANCH ]; then
  git config --global user.email $GH_EMAIL
  git config --global user.name $GH_NAME

  # Set the tag to be the package.json version
  # For branches other than master, append an unique value to
  # provent build failures.
  GITTAG=v$(npx -c 'echo "$npm_package_version"')
  # if [ $DEPLOY_BRANCH != $MASTER_BRANCH ]; then
  # 	SECONDS_SINCE_EPOCH=$(date +%s)
  # 	GITTAG=$(echo $GITTAG-$SECONDS_SINCE_EPOCH)
  # fi
  echo Taging $CIRCLE_BRANCH: $GITTAG

  # Using annotated tags; required to include tag to prevent build from running
  # when checking in the tag [https://circleci.com/docs/2.0/skip-build/]
  git tag -a $GITTAG -m "Pull Request Tag [skip build]"
  git push origin $GITTAG
fi