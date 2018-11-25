const http = require('http');

const port = 13337;

http.createServer(async (req, res) => {
	try {
		let body = '';
		for await (const chunk of req) {  // async-iteration
			body += chunk;
		}
		res.write(body);
		res.end();
	} catch {  // to avoid the unhandledRejection problem
		res.statusCode = 500;
		res.end();
	}
}).listen(port);
