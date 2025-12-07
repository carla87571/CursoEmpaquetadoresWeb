//webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		assetModuleFilename: 'assets/[hash][ext][query]'
	},
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource'
            }
        ]       
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './public/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/favicon.svg', to: 'favicon.svg' }
            ]
        })
    ]
};