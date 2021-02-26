# Sample Splunk App Development Apps 

For the broken hearted ....

All of these instructions are designed for *NIX testing. 

## Docker

``docker docker docker``

This repository includes a docker compose. For each sample app, simply start the service associated with it. If you do not wish to use docker, just use the tarball builder and install into a Splunk of your choice.
For example: ``docker-compose up -d tabbedcontent`` will start and mount the ``simple_xml_tabs`` sample app and start Splunk using the password in the compose file. You can change this if you wish, and these should not be used in production.

## Tabbed Content

This extension demonstrates the ability to use tabs within simple xml dashboards.

Concepts Covered:

1. Simple XML and Javascript Hooks
1. Using an external third-party node library via Simple XML and JS Hooks

Instructions:

1. Make sure ``yarn`` is installed on the local system.
1. Execute ``build.sh simple_xml_tabs`` to setup the extension dependencies and build the package
1. Use the package in an install of Splunk, or execute ``docker-compose up -d tabbedcontent`` to start the local docker.

## React Native Dashboards

This extension demonstrates the ability to use native react in a dashboard.

Concepts Covered:

1. Simple XML and Javascript Hooks
1. Using an external third-party node library via Simple XML and JS Hooks
1. Webpack and React Native transpiling via babel to inject into Simple XML Dashboards

Instructions:

1. Make sure ``yarn`` is installed on the local system.
1. Follow the instructions at `simple_react_app/README.md` to setup and build the react hooks.
1. Use the package in an install of Splunk, or execute ``docker-compose up -d reactcontent`` to start the local docker.
