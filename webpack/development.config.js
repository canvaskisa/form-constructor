const path = require('path');
const ip = require('ip');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const base = require('./base.config');

const HOST = ip.address();
const PORT = 3000;

module.exports = Object.assign({}, base, {
	devtool: '#eval-source-map',

	entry: [
		'webpack-dev-server/client',
		'webpack/hot/only-dev-server',
		path.resolve(base.context, 'index.js')
	],

	output: {
		filename: 'application-[hash]-[name].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: `http://${HOST}:${PORT}/`
	},

	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel',
			include: base.context,
			query: {
				plugins: [
					['react-transform', {
						transforms: [{
							transform: 'react-transform-hmr',
							imports: ['react'],
							locals: ['module']
						}, {
							transform: 'react-transform-catch-errors',
							imports: ['react', 'redbox-react']
						}
					]}
				]]
			}
		}, {
			test: /\.css$/,
			loader: 'style!css?module&localIdentName=[path]__[name]__[local]!postcss'
		}, {
			test: /\.json$/,
			loader: 'json'
		}]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HTMLWebpackPlugin({template: path.resolve(base.context, 'index.ejs')}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		})
	],

	devServer: {
		contentBase: `http://${HOST}:${PORT}/`,
		port: PORT,
		host: '0.0.0.0',
		noInfo: true,
		hot: true,
		inline: true,
		stats: {colors: true}
	}
});
