/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

//@ts-check
'use strict';

//@ts-check
/** @typedef {import('webpack').Configuration} WebpackConfig **/

const path = require('path');
const webpack = require('webpack');

module.exports = /** @type WebpackConfig */ {
	context: path.dirname(__dirname),
	mode: 'none', // this leaves the source code as close as possible to the original (when packaging we set this to 'production')
	target: 'webworker', // extensions run in a webworker context
	entry: {
		'extension': './src/extension.ts'
	},
	resolve: {
		mainFields: ['module', 'main'],
		extensions: ['.ts', '.js'], // support ts-files and js-files
		alias: {
		},
		fallback: {
			'assert': require.resolve('assert'),
			'path': require.resolve('path-browserify'),
			'util': require.resolve('util/')
		}
	},
	module: {
		rules: [{
			exclude: /node_modules/,
			test: /\.ts$/,
			use: [
				{
					loader: 'ts-loader'
				}
			]
		}]
	},
	plugins: [
		new webpack.ProvidePlugin({
			process: 'process/browser',
		}),
	],
	externals: {
		'vscode': 'commonjs vscode', // ignored because it doesn't exist
	},
	performance: {
		hints: false
	},
	output: {
		filename: '[name].js',
		libraryTarget: 'commonjs',
		path: path.join(__dirname, '../out/web')
	},
	devtool: 'nosources-source-map'
};
