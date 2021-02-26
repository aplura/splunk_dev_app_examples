const path = require('path');
let requirejsPlugin = require('requirejs-webpack-plugin'),
    webpack = require('webpack'),
    LicensePlugin = require('webpack-license-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const csvTransform = (packages) => {
  const keys = ['name', 'version', 'license']

  return [
    keys.join(','),
    ...packages.map(pckg => keys.map(key => `"${pckg[key]}"`).join(',')),
  ].join('\n')
}

const po = (assets, entry_file, entry_file_object, entry_object) => {
    let exp = {};
    exp[entry_file] = {exports: [`${entry_file}`]};
    let common_paths = ["react", "react-dom", `${entry_file_object}`];
    let ourPaths = {};
    Object.keys(assets.paths).forEach((item, index) => {
        if (common_paths.includes(item)) {
            ourPaths[item] = assets.paths[item];
        }
    });
    delete assets["baseUrl"];
    assets["shim"] = {};
    assets["paths"] = ourPaths;
    let require_named_modules = [],
        require_named_objects = [],
        require_splunk_components = {
            'backbone': 'backbone'
        },
        require_splunk_components_objects = "{"
    ;
    Object.keys(assets["paths"]).forEach((key) => {
        assets["shim"][key] = exp[key] || {exports: key};
        require_named_modules.push(`${key}`);
        require_named_objects.push(`${key.replace(/[^a-zA-Z]/g, "")}`);
    });
    Object.keys(require_splunk_components).forEach((key) => {
        require_named_modules.push(`${key}`);
        require_named_objects.push(`${require_splunk_components[key]}`);
        require_splunk_components_objects += ` ${require_splunk_components[key]}: ${require_splunk_components[key]}, `;
    });
    require_splunk_components_objects += "}";
    //assets["deps"] = ["runtime", "bootstrap-config"];
    return `require.config(${JSON.stringify(assets)});
                require([
                        "splunkjs/ready!",
                        "splunkjs/mvc/simplexml/ready!",
                        "splunkjs/mvc/utils",
                        "${require_named_modules.join('", "')}"
                    ], function (mvc,
                                 ignored,
                                 splunkjsUtils,
                                 ${require_named_objects.join(", ").replace(/"/g, "")}
                    ) {
                        reactdom.render(
                            react.createElement(${entry_file_object.replace(/[^a-zA-Z]/g, "")}.default, {
                                splunkjs: mvc,
                                utils: splunkjsUtils,
                                splunk_components: ${require_splunk_components_objects}
                                }),
                            document.getElementById("${entry_object}")
                            );
                    });
                `;
};

let config_mode = process.env.NODE_ENV || false ? process.env.NODE_ENV : 'development',
    app_name = process.env.APP_NAME || "search",
    mode = process.env.NODE_ENV === "production" ? "production" : 'development';
let path2 = __dirname + `/.env.${config_mode}`;
let dotenv = require('dotenv').config({path: path2});
module.exports = {
    entry: {
        "main": './src/index.js',
        "react": "./node_modules/react/umd/react.production.min.js",
        "react-dom": "./node_modules/react-dom/umd/react-dom.production.min.js"
    },
    externals: [
        "react",
        "react-dom"
    ],
    output: {
        globalObject: 'this',
        filename: '[name].js', // change this to '[name].[contenthash:8].js' if using the asset manifest for better caching
        path: path.join(__dirname, '../js'),
        publicPath: `/static/app/${app_name}/js`,
        library: 'main',
        libraryTarget: 'umd',
    },
    //devtool: 'inline-source-map',
    mode: mode,
    optimization: {
        namedModules: true,
        minimize: true,
        chunkIds: 'named'
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                ["@babel/plugin-proposal-object-rest-spread", {"loose": true, "useBuiltIns": true}],
                                '@babel/plugin-transform-spread',
                                '@babel/plugin-proposal-class-properties',
                                '@babel/plugin-transform-runtime',
                                '@babel/plugin-transform-modules-amd',

                            ],
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                ],
            },
            {test: /\.scss?$/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.css?$/, loaders: ['style-loader', 'css-loader']},
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": dotenv.parsed
        }),
        new CleanWebpackPlugin(),
        new requirejsPlugin({
            path: path.join(__dirname, '../js'),
            filename: 'db_main.js',
            pathUrl: `/static/app/${app_name}/js/`,
            processOutput: (assets) => {
                return po(assets, "main", "main", "react-app")
            }
        }),
        new LicensePlugin({
            excludedPackageTest: (packageName, version) => {
                return packageName.startsWith('@internal/')
            },
            replenishDefaultLicenseTexts: true,
            outputFilename: 'licenses.json',
            licenseOverrides: {
                'react@0.1.0': 'MIT'
            },
            additionalFiles: {
                'oss-licenses.csv': csvTransform,
                'oss-summary.json': packages => {
                    return JSON.stringify(
                        packages.reduce(
                            (prev, {license}) => ({
                                        ...prev,
                                        [license]: prev[license] ? prev[license] + 1 : 1
                                        }),
                            {}
                        ),
                        null,
                        2
                    )
                },
            },
        }),
    ]
};
