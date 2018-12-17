const http = require('http');

const port = 13337;

http.createServer((req, res) => {
	let body = '';
	req.setEncoding('utf8');
	req.on('data', (chunk) => {
		body += chunk;
	});
	req.on('end', () => {
		res.write(body);
		res.end();
	})

}).listen(port);
