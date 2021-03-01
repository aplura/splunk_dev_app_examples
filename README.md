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

## KVStore Editor in ReactJS

So you were thinking about React Native and KVSTORE the other daayy......

Ok, React. React, ok. This app shows how to compile a more complex react native application into an AMD module that Splunk can load. Additionally, the built-in SplunkJS MVC service is passed to the application for use on the endpoints. This service can query the API endpoints, or perform other Splunk-internal calls and/or integrations using the credentials of the user logged in. 

### Prerequisites

1. yarn v1
    1. https://yarnpkg.com/getting-started/install

### How to build

    cd ./appserver/static/react_native
    ./build.sh
    
That's it! A Splunk-compatible "bootstrap" js is located into the `appserver/static/react` folder, and that can be included on the simple xml dashboard! Change anything you want within the `appserver/static/react_native/src/` folder, and re-build. A simple `_bump` and you are off to the races!

### How to use

See ``react_content`` dashboard for an example. But the primary bits are to make an html panel, as below. Place the name of the kvstore (from ``collections.conf``)  in the ``data-kvstore`` attribute. Place the columns that you want to display into the ``data-columns`` attribute. These columns don't need to exist in ``transforms.conf`` or ``collections.conf``. There must be at least 1 column.

    <html>
        <div class="kvstore_editor" data-kvstore="kvstore_react" data-columns="company_name,company_id,is_company,employee_count"/>
      </html>

#### Validation
Note on validation: If ``collections.conf`` has a ``field.<name>`` type assignment, it will be validated in the table using the following logic:

| type | isEmpty | validators.js check|
| ---- | ------ | ---- |
| number |  ``validator.isEmpty(value)`` | ``(!validator.isFloat(value) OR !validator.isInt(value))`` |
| bool | ``validator.isEmpty(value)`` | ``!validator.isBoolean(value)`` |
| string | ``validator.isEmpty(value)`` | ``!validator.isAscii(value)`` |
| time | ``validator.isEmpty(value)`` | ``!validator.isDate(value)`` |

Ref: https://www.npmjs.com/package/validator