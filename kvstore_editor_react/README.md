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