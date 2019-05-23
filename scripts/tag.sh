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
echo "github.com AAAAB3NzaC1yc2EAAAADAQABAAABAQC3X4Y+Rh0buf/02xhAqGhRzNknXkH7tGqeG6mum5OT41MgafpKGlKcKUjjX489y2Zz9btlYs2r9LRinr+eRGqD/DxMDk+ZkJHFVKgxcWh6HKR7q+Mn/qoU+WiEvxWPrxjHnKoMocMpr5iARCBuORQf5zN2geoSiN82MKcsS9SjDAQDJQahIMtfzMrMm144Um844h8FEWxKwuN+v1Zh5Lgfg75useFH9hPTsSi7JwCBZT2t+8DnYtnclwKIsiTpsIJ0cDWBjTQ4kwH1pYIMHkLUS2uB8j4GudhZgb8SuH3t+LY7UkN25LCy3OZwtVAH6BnysKhEKnGyTHaCiDlaG6Zv" > ~/.ssh/known_hosts
git tag -a $GITTAG -m "Pull Request Tag [skip build]"
git push origin $GITTAG
