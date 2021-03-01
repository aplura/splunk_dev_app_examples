require.config({"paths":{"main":"/static/app/kvstore_editor_react/react/main.js?v=ebe59857a2f13f934558","react":"/static/app/kvstore_editor_react/react/react.js?v=271006ef08b963e69efc","react-dom":"/static/app/kvstore_editor_react/react/react-dom.js?v=6a6d46849c43afc85508"},"shim":{"main":{"exports":["main"]},"react":{"exports":"react"},"react-dom":{"exports":"react-dom"}}});
                require([
                        "splunkjs/ready!",
                        "splunkjs/mvc/simplexml/ready!",
                        "splunkjs/mvc/utils",
                        "main", "react", "react-dom", "backbone", "jquery"
                    ], function (mvc,
                                 ignored,
                                 splunkjsUtils,
                                 main, react, reactdom, backbone, $
                    ) {
                    
                    let myObjects = $(".kvstore_editor").each((k, v)=>{
                        reactdom.render(
                        react.createElement(main.default, {
                            splunk: mvc,
                            utils: splunkjsUtils,
                            splunk_components: { backbone: backbone,  $: $, } ,
                            data: {...$(v).data()}
                            }),
                         v
                        );
                    });
                    });
                