/* global __dirname module */

var path = require("path");
var webpack = require("webpack");
var merge = require("webpack-merge");

var CopyWebpackPlugin = require("copy-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");

var config = require("../config/env");
var webpackConfig = require("./webpack.base.conf");
var utils = require("./utils");

var styleLoaderOptions = {
    minimize: true
};

var webpackProdConfig = merge(webpackConfig, {
    devtool: "#source-map",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "static/scripts/[name].js",
        chunkFilename: "static/scripts/[id].js"
    },
    module: {
        rules: utils.createStyleLoaders(styleLoaderOptions)
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: function (module) {
                return module.context && module.context.indexOf("node_modules") !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            chunks: ["vendor"]
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.prod.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            // Necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: "dependency"
        }),
        new ExtractTextPlugin("static/styles/[name].css"),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "../favicon.ico"),
                to: path.resolve(__dirname, "../dist/favicon.ico")
            },
            {
                from: path.resolve(__dirname, "../static"),
                to: path.resolve(__dirname, "../dist/static")
            }
        ])
    ]
});

if (config.createBundleAnalyzerReport) {
    var BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
    webpackProdConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackProdConfig;
