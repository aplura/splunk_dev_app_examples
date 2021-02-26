require.config({"paths":{"main":"/static/app/search/react/main.js?v=7e9430bfb8a6bb50ecbb","react":"/static/app/search/react/react.js?v=bb858ff9bd61f7d8b948","react-dom":"/static/app/search/react/react-dom.js?v=4faced382465d923ff03"},"shim":{"main":{"exports":["main"]},"react":{"exports":"react"},"react-dom":{"exports":"react-dom"}}});
                require([
                        "splunkjs/ready!",
                        "splunkjs/mvc/simplexml/ready!",
                        "splunkjs/mvc/utils",
                        "main", "react", "react-dom", "backbone"
                    ], function (mvc,
                                 ignored,
                                 splunkjsUtils,
                                 main, react, reactdom, backbone
                    ) {
                        reactdom.render(
                            react.createElement(main.default, {
                                splunkjs: mvc,
                                utils: splunkjsUtils,
                                splunk_components: { backbone: backbone, }
                                }),
                            document.getElementById("react-app")
                            );
                    });
                