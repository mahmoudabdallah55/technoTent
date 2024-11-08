const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development', // or 'production' for minified output
	entry: './template/scss/style.scss',
	output: {
		path: path.resolve(__dirname, 'template/css'),
		filename: 'style.bundle.js', // Output JavaScript file (not used for CSS)
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader, // Extract CSS into separate files
					'css-loader',	 // Translates CSS into CommonJS
					'sass-loader'	 // Compiles Sass to CSS
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css', // Output CSS directly to style.css
		}),
	],
	watch: true, // Enable watch mode
};