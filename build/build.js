/* global process */

var rimraf = require("rimraf");
var webpack = require("webpack");

var config = require("../config/env");
config.extractCSS = true;

var webpackConfig = require("./webpack.prod.conf");

rimraf(
    "dist",
    err => {
        if (err) throw err;

        webpack(webpackConfig, function (err, stats) {
            if (err) throw err;

            process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }));
        });
    }
);
