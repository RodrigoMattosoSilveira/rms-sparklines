#!/usr/bin/env bash

# Usage
# TBD
#
set -ev
echo Taging: $TRAVIS_BRANCH
# Set the tag to be the package.json version
# For branches other than master, append an unique value to ...
# provent build failures.
GITTAG=v$(npx -c 'echo "$npm_package_version"')
if [ $TRAVIS_BRANCH != "master" ]; then
  GITTAG=$(echo $GITTAG.$TRAVIS_BUILD_NUMBER)
fi
echo Taging: $TRAVIS_BRANCH: $GITTAG

# Using annotated tags; required to include tag to prevent build from running
# when checking in the tag [https://circleci.com/docs/2.0/skip-build/]
openssl aes-256-cbc -k "$travis_key_password" -d -md sha256 -a -in rms-sparkline-travis.enc -out rms-sparkline-travis-key
echo "Host github.com" > ~/.ssh/config
echo "  IdentityFile  $(pwd)/rms-sparkline-travis-key" >> ~/.ssh/config
chmod 400 rms-sparkline-travis-key
git remote set-url origin git@github.com:RodrigoMattosoSilveira/rms-sparklines.git
echo "192.30.253.112 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==" > ~/.ssh/known_hosts
echo "192.30.253.113 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==" >> ~/.ssh/known_hosts
git tag -a $GITTAG -m "Pull Request Tag [skip build]"
git push origin $GITTAG
