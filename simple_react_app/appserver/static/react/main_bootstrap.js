require.config({"paths":{"main":"/static/app/simple_react_app/react/main.js?v=548f50cd75e4a51143dd","react":"/static/app/simple_react_app/react/react.js?v=0c283777d9c2f2dff7f1","react-dom":"/static/app/simple_react_app/react/react-dom.js?v=3e54d865f8abce15e263"},"shim":{"main":{"exports":["main"]},"react":{"exports":"react"},"react-dom":{"exports":"react-dom"}}});
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
                