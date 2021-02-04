#!/bin/bash
APP=$1
PWD=$(pwd)
cd "$APP/appserver/static/js"
yarn install
cd "../../../.."
tar cvfz "$APP.tgz" "$APP/"