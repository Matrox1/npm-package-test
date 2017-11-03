var webpack = require("webpack");

var WebpackDevServer = require("webpack-dev-server");

var port = 8080;

var config = require("../config/env");
config.extractCSS = false;

var webpackConfig = require("./webpack.dev.conf");
webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:" + port + "/");

var compiler = webpack(webpackConfig);
var server = new WebpackDevServer(compiler, {
    inline: true,
    quiet: true
});
server.listen(port);
