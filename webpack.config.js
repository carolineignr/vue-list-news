module.exports = {
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
			{
				test: /\.svg$/,
				loader: [
					'vue-loader',
					'vue-svg-loader'
				]
			}
		]
	},
}