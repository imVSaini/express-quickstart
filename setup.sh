#!/bin/bash

echo "Making sure all dependencies are met"

if ! command -v yarn &> /dev/null; then
  echo "Yarn is not installed"
  echo "See yarn install docs: https://yarnpkg.com/getting-started/install"
  exit 1
fi

echo "Installing dependencies ..."
yarn

echo "Done, run \"yarn server\" or \"yarn start\" to start the server"
exit 0
