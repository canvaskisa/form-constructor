const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const base = require('./base.config');

module.exports = Object.assign({}, base, {

	entry: path.resolve(base.context, 'components/FormConstructor.js'),

	output: {
		filename: 'FormConstructor.js',
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
		new ExtractTextPlugin('FormConstructor.css'),
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
		})
	]
});
