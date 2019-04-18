const path = require('path');

module.exports = {
	entry: path.join(__dirname, '../src/Components/TinyDropdown/index.js'),
	output: {
		filename: 'index.js',
		path: path.join(__dirname, '../dist/TinyDropdown'),
		libraryExport: 'default',
		libraryTarget: 'amd'
	},
	module:{
		rules:[{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			options: {
				presets: [
					'@babel/preset-react',
					{
						plugins: [
							'@babel/plugin-proposal-class-properties'
						]
					}
				]
			},
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']	
		}]
	},
}
