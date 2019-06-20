#!/usr/bin/env bash

# Usage
# TBD
#
set -ev
echo Taging: $TRAVIS_BRANCH

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
   openssl aes-256-cbc -k "$travis_key_password" -d -md sha256 -a -in rms-sparkline-travis.enc -out rms-sparkline-travis-key
   echo "Host github.com" > $HOME/.ssh/config
   echo "  IdentityFile rms-sparkline-travis-key" >> $HOME/.ssh/config
   echo "  CheckHostIP no" >> $HOME/.ssh/config
   cat $HOME/.ssh/config
   chmod 400 rms-sparkline-travis-key
   git remote set-url origin git@github.com:RodrigoMattosoSilveira/rms-sparklines.git
   echo "github.com,192.30.253.112,192.30.253.113 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==" >  $HOME/.ssh/known_hosts
   cat $HOME/.ssh/known_hosts
   git tag -a $GITTAG -m "Pull Request Tag [skip build]"
   git push origin $GITTAG
fi
