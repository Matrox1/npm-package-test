/* global __dirname module */

var path = require("path");

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = require("../config/env");

module.exports = {
    createStyleLoaders: function(options) {
        var styleLoader = {
            loader: "style-loader",
            options: options
        };

        var cssLoader = {
            loader: "css-loader",
            options: options
        };

        var lessLoader = {
            loader: "less-loader",
            options: options
        }
        
        return [
            {
                test: /\.less$/,
                use: function () {
                    if (config.extractCSS) {
                        return ExtractTextPlugin.extract({
                            use: [cssLoader, lessLoader],
                            fallback: "style-loader"
                        });
                    } else {
                        return [styleLoader, cssLoader, lessLoader];
                    }
                }(),
                include: [
                    path.join(__dirname, "../.bootstrap"),
                    path.join(__dirname, "../src")
                ]
            },
            {
                test: /\.css$/,
                use: function () {
                    if (config.extractCSS) {
                        return ExtractTextPlugin.extract({
                            use: [cssLoader],
                            fallback: "style-loader"
                        });
                    } else {
                        return [styleLoader, cssLoader];
                    }
                }(),
                include: [
                    path.join(__dirname, "../.bootstrap"),
                    path.join(__dirname, "../src")
                ]
            }
        ];
    }
};
