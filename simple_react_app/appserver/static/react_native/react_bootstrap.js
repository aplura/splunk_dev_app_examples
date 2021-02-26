require.config({
    "paths": {
        "app": "/static/app/simple_react_app/js/src/App.js?v=7db57c120d80baeda5b5",
        "react": "/static/app/simple_react_app/js/node_modules/react/umd/react.production.min.js?v=90c61273bd8d177b96e2",
        "react-dom": "/static/app/simple_react_app/js/node_modules/react-dom/umd/react-dom.production.min.js?v=2a7a3c86b3aaab49d302"
    },
    "shim": {
        "app": {"exports": ["app"]},
        "react": {"exports": "react"},
        "react-dom": {"exports": "react-dom"}
    }
});
require([
    "splunkjs/ready!",
    "splunkjs/mvc/simplexml/ready!",
    "splunkjs/mvc/utils",
    "app", "react", "react-dom", "backbone"
], function (mvc,
             ignored,
             splunkjsUtils,
             app, react, reactdom, backbone
) {
    reactdom.render(
        react.createElement(app.default, {
            splunkjs: mvc,
            utils: splunkjsUtils,
            splunk_components: {backbone: backbone,}
        }),
        document.getElementById("react-app")
    );
});
                