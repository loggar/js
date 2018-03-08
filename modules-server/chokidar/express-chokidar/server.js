var express = require('express')
var app = express()
var chokidar = require('chokidar')
var watcher = chokidar.watch('./app')
var port = process.env.PORT || 9000

// exclude in production
/*
var production = process.env.NODE_ENV === 'production'
if (!production) {
	var chokidar = require('chokidar')
	var watcher = chokidar.watch('./dist')
	watcher.on('ready', function () {
		watcher.on('all', function () {
			console.log("Clearing /dist/ module cache from server")
			Object.keys(require.cache).forEach(function (id) {
				if (/[\/\\]dist[\/\\]/.test(id)) delete require.cache[id]
			})
		})
	})
}
*/

watcher.on('ready', function () {
	watcher.on('all', function () {
		console.log("Clearing /dist/ module cache from server")
		Object.keys(require.cache).forEach(function (id) {
			if (/[\/\\]app[\/\\]/.test(id)) delete require.cache[id]
		})
	})
})
app.use(function (req, res, next) {
	require('./app/index')(req, res, next)
})
app.listen(port);
console.log('Server starts on port ' + port)