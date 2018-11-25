require('isomorphic-fetch');

class HttpError extends Error { // (1)
	constructor(response) {
		super(`${response.status} for ${response.url}`);
		this.name = 'HttpError';
		this.response = response;
	}
}

function loadJson(url) { // (2)
	return fetch(url)
		.then(response => {
			if (response.status == 200) {
				return response.json();
			} else {
				throw new HttpError(response);
			}
		})
}

function demoGithubUser(name) {
	return loadJson(`https://api.github.com/users/${name}`)
		.then(user => {
			console.log(`Full name: ${user.name}.`); // (1)
			return user;
		})
		.catch(err => {
			if (err instanceof HttpError && err.response.status == 404) { // (2)
				console.error("No such user, please reenter.");
			} else {
				throw err;
			}
		});
}

demoGithubUser('loggar');
demoGithubUser('no_such_user_like_this');
