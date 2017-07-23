module.exports = {
	entry: "./app.js",
	output: {
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /nodule_modules/,
				loaders: 'jshint-loader',
				enforce: 'pre'
			},		
			{
				test: /\.es6$/,
				exclude: /nodule_modules/,
				loader: 'babel-loader'
			}
		]		
	},

	resolve: {
		extensions: ['.js', '.es6']
	}

}