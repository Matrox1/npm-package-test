/* global __dirname module */

var path = require("path");
var webpack = require("webpack");
var merge = require("webpack-merge");

var FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var webpackConfig = require("./webpack.base.conf");
var utils = require("./utils");

var styleLoaderOptions = {
    sourceMap: true
};

var webpackDevConfig = merge(webpackConfig, {
    devtool: "#cheap-module-eval-source-map",
    output: {
        path: path.resolve(__dirname, "../"),
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        rules: utils.createStyleLoaders(styleLoaderOptions)
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"development"'
            }
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.dev.html",
            inject: true
        }),
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: ["Running at http://localhost:8080"]
            }
        })
    ]
});

module.exports = webpackDevConfig;