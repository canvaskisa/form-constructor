const path = require('path');

const context = path.resolve(__dirname, '../src');

module.exports = {

	context,

	postcss: () => [
		require('postcss-import')({path: context}),
		require('postcss-short'),
		require('postcss-clearfix'),
		require('postcss-autoreset')({reset: {
			all: 'initial',
			boxSizing: 'border-box',
			fontFamily: 'Open Sans',
			display: 'block'
		}}),
		require('postcss-initial'),
		require('postcss-cssnext'),
		require('css-mqpacker')
	],

	resolve: {
		modulesDirectories: ['node_modules'],
		alias: {
			ducks: path.resolve(context, 'ducks'),
			components: path.resolve(context, 'components')
		}
	},

	stats: {children: false}
};
