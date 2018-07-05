// $ npm install --save bunyan-request-logger connect-cache-control

var express = express = require('express'),
	logger = require('bunyan-request-logger'),
	noCache = require('connect-cache-control'),
	log = logger(),
	app = express(),
	port = 3000;

app.use(log.requestLogger());

// Route to handle client-side log messages.
// Counter to intuition, client-side logging works best with GET requests.
// AJAX POST sends headers and body in two steps, which slows it down.
// This route prepends the cache-control middleware so that the browser always logs to the server instead of fetching a useless No Content message from its cache.
app.get('/log.gif', noCache, log.route());

app.listen(port, function () {
	log.info('Listening on port ' + port);
});
