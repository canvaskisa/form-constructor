const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const base = require('./base.config');

module.exports = Object.assign({}, base, {

	entry: path.resolve(base.context, 'index.js'),

	output: {
		filename: 'application.js',
		path: path.resolve(__dirname, '../dist')
	},

	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel',
			include: base.context
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style', 'css?module&localIdentName=[hash:base64:5]!postcss')
		}, {
			test: /\.json$/,
			loader: 'json'
		}]
	},

	plugins: [
		new HTMLWebpackPlugin({template: path.resolve(base.context, 'index.ejs')}),
		new ExtractTextPlugin('application.css'),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			output: {comments: false},
			compress: {warnings: false}
		}),
		new CompressionPlugin({
			asset: '[file].gz',
			regExp: /\.js$|\.css$/
		})
	]
});
