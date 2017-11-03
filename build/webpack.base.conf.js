/* global __dirname module */

var path = require("path");

module.exports = {
    entry: {
        app: ["./src/Main.tsx"]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        modules: [
            "node_modules",
            "src"
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                include: [
                    path.join(__dirname, "../.bootstrap"),
                    path.join(__dirname, "../src")
                ]
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: [
                    path.join(__dirname, "../.bootstrap"),
                    path.join(__dirname, "../src")
                ]
            }
        ]
    }
};
