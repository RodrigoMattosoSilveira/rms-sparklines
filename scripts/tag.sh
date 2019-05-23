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
openssl aes-256-cbc -k "$travis_key_password" -in rms-sparkline-travis.enc -out rms-sparkline-travis-key -d
echo "Host github.com" > ~/.ssh/config
echo "  IdentityFile  $(pwd)/rms-sparkline-travis-key" >> ~/.ssh/config
chmod 400 rms-sparkline-travis-key
git remote set-url origin git@github.com:RodrigoMattosoSilveira/rms-sparklines.git
echo "github.com ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCXI/iVlo/AHlhMtbRe03lpC+WB+pfC/7YBJSgX0r0ffFXQDrSHkHTmDs+Pr/4ASGg67lorzSS4LBlg2FLNyJhD9tcRfHVzOGvBNDXnpEKLhXpMJbvEMqAotvImFE2pjXfvWyhdeMbiDGSgCuNK74XJUgZXb7HT+bsu78MWIpSONhYkiILe5y2/lfc+T0Q4Jo08F5yqldIHKKEc1SXpAvu/XZIyS1d5CqoSuRCkIoqvoK2PE1LjkvQZIDx/XZGu83lcV3nTNN5HHyQUcoyDPegZhSzPSXCL6G1OrBdsNpogCJyTUGxB1+SaGGdo1KJA2uui4qtns09Jcb1z1hSiI3b1eh65aGKnvqLQalZ4Z+Qt5NXNg+bt9C4vIba7A0X89QDS8sO7kNQVHFYv3kuPWOVrs7XMJzJwX/jwBbdudW/VETuEG7DzmyWsjBmK3bbcb0Hfm9y5rC/4qkp+xWa/vT8JH4mGosjNr2Va780raw9X9a/SZjmOnXCREIuWdHE/YNlUSLPcfF9C7kHIIjNwEAQTpwOexZZZcHpi71ggeiWaMcrR/muHC2iJ31s3v224mVtTOiBBV42bby4de8BKyatTVupKzEIWHmqmReWIfahqibulqLaOy6oy1RV2Q2/SDz29rQv/lBYLPXO3faq7Vs55b66FqC12JoKHNGNOhBcsYQ== r3850365@gmail.com" > ~/.ssh/known_hosts
git tag -a $GITTAG -m "Pull Request Tag [skip build]"
git push origin $GITTAG
