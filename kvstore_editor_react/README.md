# KVStore Editor in ReactJS

So you were thinking about React Native and KVSTORE the other daayy......

Ok, React. React, ok. This app shows how to compile a more complex react native application into an AMD module that Splunk can load. Additionally, the built-in SplunkJS MVC service is passed to the application for use on the endpoints. This service can query the API endpoints, or perform other Splunk-internal calls and/or integrations using the credentials of the user logged in. 

## Prerequisites

1. yarn v1
    1. https://yarnpkg.com/getting-started/install

## How to build

    cd ./appserver/static/react_native
    ./build.sh
    
That's it! A Splunk-compatible "bootstrap" js is located into the `appserver/static/react` folder, and that can be included on the simple xml dashboard! Change anything you want within the `appserver/static/react_native/src/` folder, and re-build. A simple `_bump` and you are off to the races!

## How to use

See ``react_content`` dashboard for an example. But the primary bits are to make an html panel, as below. Place the name of the kvstore (from ``collections.conf``)  in the ``data-kvstore`` attribute. Place the columns that you want to display into the ``data-columns`` attribute. These columns don't need to exist in ``transforms.conf`` or ``collections.conf``. There must be at least 1 column.

    <html>
        <div class="kvstore_editor" data-kvstore="kvstore_react" data-columns="company_name,company_id,is_company,employee_count"/>
      </html>

### Validation
Note on validation: If ``collections.conf`` has a ``field.<name>`` type assignment, it will be validated in the table using the following logic:

| type | isEmpty | validators.js check|
| ---- | ------ | ---- |
| number |  ``validator.isEmpty(value)`` | ``(!validator.isFloat(value) OR !validator.isInt(value))`` |
| bool | ``validator.isEmpty(value)`` | ``!validator.isBoolean(value)`` |
| string | ``validator.isEmpty(value)`` | ``!validator.isAscii(value)`` |
| time | ``validator.isEmpty(value)`` | ``!validator.isDate(value)`` |

Ref: https://www.npmjs.com/package/validator