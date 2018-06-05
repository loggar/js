# webpack-hot-reloading-backend

## webpack confituration

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
		]
	]
}
```

```
// webpack.config.server.js

const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')

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
	],
	output: {
		path: path.join(__dirname, '.build'),
		filename: 'main.server-bundle.js'
	}
}
```

backend entry

```
// src-server/app.js

import express from 'express'
const app = express()
app.get('/api', (req, res) => {
	res.send({
		message: 'version hot reloaded : 001'
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

"start:server:dev": "rm -rf ./build && webpack --mode development --config webpack.config.server.js"
```

run webpack

```
npm run start:server:dev

> webpack-hot-reloading-backend@0.1.0 start:server:dev C:\Users\webnl\Documents\_workspace_js\loggar_js\js-build-deploy\webpack\webpack-hot-reloading-backend
> rm -rf ./build && webpack --mode development --config webpack.config.server.js

i ｢webpack｣: Watching enabled
i ｢webpack｣: Build Finished

webpack v4.10.2

378ef8b65f6fef2f8e35
  size     name                 module                                        status
  1.3 kB   log-apply-result.js  (webpack)/hot/log-apply-result.js             built
  1.01 kB  log.js               (webpack)/hot/log.js                          built
  1.15 kB  poll.js?1000         (webpack)/hot/poll.js?1000                    built
  170 B    app.js               ./src-server/app.js                           built
  42 B     express              external "express"                            built
  40 B     0                    multi webpack/hot/poll?1000 ./src-server/app  built

  size     name                 asset                                         status
  33.9 kB  main                 app.js                                        emitted

  Δt 1313ms
```
