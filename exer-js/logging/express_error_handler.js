// $ npm install --save express-error-handler connect-cache-control express-error-handler

'use strict';

var express = require('express'),
	logger = require('bunyan-request-logger'),
	noCache = require('connect-cache-control'),
	errorHandler = require('express-error-handler'),
	log = logger(),
	app = express(),
	env = process.env,
	port = env.myapp_port || 3000,
	http = require('http'),
	server;

app.use(log.requestLogger());

// Route to handle client-side log messages.
// This route prepends the cache-control middleware so that the browser always logs to the server instead of fetching a useless OK message from its cache.
app.get('/log.gif', noCache, log.route());

// Route that triggers a sample error:
app.get('/error', function createError(req,
	res, next) {
	var err = new Error('Sample error');
	err.status = 500;
	next(err);
});

// Log request errors:
app.use(log.errorLogger());

// Create the server object that we can pass in to the error handler:
server = http.createServer(app);

// Respond to errors and conditionally shut down the server. Pass in the server object so the error handler can shut it down gracefully:
app.use(errorHandler({
	server: server
}));

server.listen(port, function () {
	log.info('Listening on port ' + port);
});

/*
  $ cd ./node_modules/bunyan-request-logger
  $ node ./examples/app.js
    
  {
     "name":"unnamed app",
     "hostname":"unnamed-host",
     "pid":62136,
     "level":30,
     "msg":"Listening on port 3000",
     "time":"2013-10-07T07:52:59.236Z",
     "v":0
  }
    
    
  $ curl localhost:3000/log?somedata=yay
    
  {
     "name":"unnamed app",
     "hostname":"unnamed-host",
     "pid":62136,
     "level":30,
     "req":{
        "url":"/log?somedata=yay",
        "method":"GET",
        "protocol":"http",
        "requestId":"chmhekaby0000y0ixelvt7y7u",
        "ip":"127.0.0.1",
        "headers":{
           "user-agent":"curl/7.24.0 
           (x86_64-apple-darwin12.0) 
           libcurl/7.24.0 OpenSSL/0.9.8x 
           zlib/1.2.5",
           "host":"localhost:3000",
           "accept":"* / *"
        }
     },
     "msg":"",
     "time":"2013-10-07T07:53:07.150Z",
     "v":0
  }
    
  {
     "name":"unnamed app",
     "hostname":"unnamed-host",
     "pid":62136,
     "level":30,
     "res":{
        "statusCode":200,
        "headers":"HTTP/1.1 200 OK
        X-Powered-By: Express
        Expires: 0
        Cache-Control: no-store, no-cache,
        must-revalidate, max-age=0
        Pragma: no-cache
        Content-Type: text/plain
        Content-Length: 2
        Date: Mon, 07 Oct 2013 07:53:07 GMT
        Connection: keep-alive",
        "requestId":"chmhekaby0000y0ixelvt7y7u",
        "responseTime":3
     },
     "msg":"",
     "time":"2013-10-07T07:53:07.154Z",
     "v":0
  }
    
  $ curl localhost:3000/error
    
  {
     "name":"unnamed app",
     "hostname":"unnamed-host",
     "pid":62136,
     "level":30,
     "req":{
        "url":"/error",
        "method":"GET",
        "protocol":"http",
        "requestId":"chmhekbuq0001y0ix6k6brxq6",
        "ip":"127.0.0.1",
        "headers":{
           "user-agent":"curl/7.24.0
           (x86_64-apple-darwin12.0)
           libcurl/7.24.0 OpenSSL/0.9.8x
           zlib/1.2.5",
           "host":"localhost:3000",
           "accept":"* / *"
        }
     },
     "msg":"",
     "time":"2013-10-07T07:53:09.122Z",
     "v":0
  }
    
  {
     "name":"unnamed app",
     "hostname":"unnamed-host",
     "pid":62136,
     "level":50,
     "err":{
        "message":"Sample error",
        "name":"Error",
        "requestId":"chmhekbuq0001y0ix6k6brxq6",
        "stack":"Error: Sample error
        at createError (/Users/user/Dropbox/dev/
        pja-source/bunyan-request-logger/examples/
        app.js:39:13)
        at ..."
     },
     "msg":"",
     "time":"2013-10-07T07:53:09.124Z",
     "v":0
  }
    
  {
     "name":"unnamed app",
     "hostname":"unnamed-host",
     "pid":62136,
     "level":30,
     "res":{
        "statusCode":500,
        "headers":"HTTP/1.1 500 Internal Server
        Error
        X-Powered-By: Express
        Content-Type: text/plain
        Content-Length: 21
        Date: Mon, 07 Oct 2013 07:53:09 GMT
        Connection: keep-alive",
        "requestId":"chmhekbuq0001y0ix6k6brxq6",
        "responseTime":3
     },
     "msg":"",
     "time":"2013-10-07T07:53:09.125Z",
     "v":0
  }
*/