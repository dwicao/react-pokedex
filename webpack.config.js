var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var prod = process.argv.indexOf('-p') !== -1;
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});

var config = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			},
			{
        test: /\.css$/,
        loader: "style-loader!css-loader"
		  },
		]
	},
	plugins: [
    	new webpack.NoErrorsPlugin(), 
		new ExtractTextPlugin('styles.css'),
		HtmlWebpackPluginConfig,
	]
};

config.plugins = config.plugins || [];

if (prod) {
  config.plugins.push(new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': `"production"`
      }
  }));
} else {
  config.plugins.push(new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': `"dev"`
      }
  }));
}

module.exports = config;