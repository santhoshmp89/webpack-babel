var webpackStrip = require('strip-loader');
var DevConfig = require('./webpack.config');
var stripLoader = {
	test: [/\.js$/, /\.es6/],
	exclude: /node_moduels/,
	loader: webpackStrip.loader('console.log')
}

DevConfig.module.rules.push(stripLoader);

module.exports = DevConfig;