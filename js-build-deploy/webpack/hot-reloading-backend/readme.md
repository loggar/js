# webpack-hot-reloading-backend

install

```
npm install webpack babel-loader babel-core babel-preset-env webpack-command webpack-node-externals start-server-webpack-plugin --save-dev

npm install express --save
```

```
// .babelrc

{
	"presets": [
		[
			"env",
			{
				"modules": false
			}
		],
		"react"
	]
}
```

```
// webpack.config.server.js

const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: [
		'webpack/hot/poll?1000',
		'./bin/www'
	],
	watch: true,
	target: 'node',
	externals: [nodeExternals({
		whitelist: ['webpack/hot/poll?1000']
	})],
	module: {
		rules: [{
			test: /\.js?$/,
			use: 'babel-loader',
			exclude: /node_modules/
		}]
	},
	plugins: [
		new StartServerPlugin('main.server-bundle.js'),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				"BUILD_TARGET": JSON.stringify('server')
			}
		}),
		new CleanWebpackPlugin(['.build']),
	],
	output: {
		path: path.join(__dirname, '.build'),
		filename: 'main.server-bundle.js'
	}
}
```

backend module

```
//src-server/lib-sample.js

var sample = {
	fn1: function () {
		return 12;
	}
}

export default sample
```

backend entry

```
// src-server/app.js

import express from 'express'
import sample from './lib-sample'

const app = express()
app.get('/api', (req, res) => {
	res.send({
		message: 'server hot reloaded version: 003',
		sample: sample.fn1()
	})
})
export default app
```

backend server

```
// bin/www.js

import http from 'http'
import app from '../src-server/app'
const server = http.createServer(app)
let currentApp = app
server.listen(3000)
if (module.hot) {
	module.hot.accept(['../src-server/app'], () => {
		server.removeListener('request', currentApp)
		server.on('request', app)
		currentApp = app
	})
}
```

npm script

```
// package.json

"start:server:dev": webpack --mode development --config webpack.config.server.js"
```

run webpack

```
npm run start:server:dev

http://localhost:3000/api
```
