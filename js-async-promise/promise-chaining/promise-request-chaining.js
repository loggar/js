var request = require("request");
var userDetails;

function initialize() {
	// Setting URL and headers for request
	var options = {
		url: 'https://api.github.com/users/loggar',
		headers: {
			'User-Agent': 'request'
		}
	};
	// Return new promise 
	return new Promise(function (resolve, reject) {
		// Do async job
		request.get(options, function (err, resp, body) {
			if (err) {
				reject(err);
			} else {
				resolve(JSON.parse(body));
			}
		})
	})
}

function main() {
	var initializePromise = initialize();
	initializePromise.then(function (result) {
		userDetails = result;
		console.log("Initialized user details");
		// Use user details from here
		return userDetails;
	}, function (err) {
		console.log(err);
	}).then(function (result) {
		// Print the code activity. Prints 110
		console.log(result.public_gists + result.public_repos);
	})
}

main();