#!/bin/bash
APP=$1
PWD=$(pwd)
cd "$APP/appserver/static/js"
yarn install
cd ..
cp ./html/README.md ../../
cd "../../.."
tar cvfz "$APP.tgz" "$APP/"