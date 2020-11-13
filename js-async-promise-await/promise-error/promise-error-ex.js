require('isomorphic-fetch');

fetch('https://no-such-server.blabla') // rejects
	.then(response => response.json())
	.catch(err => console.error(err)) // TypeError: failed to fetch (the text may vary)

/*
{ FetchError: request to https://no-such-server.blabla failed, reason: getaddrinfo ENOTFOUND no-such-server.blabla no-such-server.blabla:443
    at ClientRequest.<anonymous> (C:\Users\webnl\Documents\_workspace_js\loggar_js\node_modules\node-fetch\index.js:133:11)
    at emitOne (events.js:116:13)
    at ClientRequest.emit (events.js:211:7)
    at TLSSocket.socketErrorListener (_http_client.js:387:9)
    at emitOne (events.js:116:13)
    at TLSSocket.emit (events.js:211:7)
    at emitErrorNT (internal/streams/destroy.js:64:8)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)
    at process._tickCallback (internal/process/next_tick.js:180:9)
  name: 'FetchError',
  message: 'request to https://no-such-server.blabla failed, reason: getaddrinfo ENOTFOUND no-such-server.blabla no-such-server.blabla:443',
  type: 'system',
  errno: 'ENOTFOUND',
  code: 'ENOTFOUND' }
*/

fetch('https://loggar.github.io/note/sample-res/sample.1.txt') // fetch works fine now, the server responds successfully
	.then(response => response.json()) // rejects: the response is text, not a valid json
	.catch(err => console.error(err)) // SyntaxError: Unexpected token < in JSON at position 0

/*
{ FetchError: invalid json response body at https://loggar.github.io/note/sample-res/sample.1.txt reason: Unexpected number in JSON at position 2
    at C:\Users\webnl\Documents\_workspace_js\loggar_js\node_modules\node-fetch\lib\body.js:48:31
    at <anonymous>
    at process._tickCallback (internal/process/next_tick.js:188:7)
  name: 'FetchError',
  message: 'invalid json response body at https://loggar.github.io/note/sample-res/sample.1.txt reason: Unexpected number in JSON at position 2',
  type: 'invalid-json' }
*/