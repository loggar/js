require('isomorphic-fetch');

function loadJson(url) {
	return fetch(url)
		.then(response => response.json());
}

function loadGithubUser(name) {
	return fetch(`https://api.github.com/users/${name}`)
		.then(response => response.json());
}

function showAvatar(githubUser) {
	return new Promise(function (resolve, reject) {
		// let img = document.createElement('img');
		let img = {};
		img.src = githubUser.avatar_url;
		img.className = "promise-avatar-example";
		// document.body.append(img);
		console.log("img:", img);

		// setTimeout(() => img.remove(), 3000);
		setTimeout(() => {
			// clear object
			// for enumerable properties
			for (const prop of Object.keys(img)) {
				delete img[prop];
			}
			resolve(githubUser);
		}, 2000);
	});
}

// Use them:
loadJson('https://loggar.github.io/js/docs/sample-res/sample.1.json')
	.then(user => loadGithubUser(user.id))
	.then(showAvatar)
	.then(githubUser => console.log(`Finished showing ${githubUser.name}`));
	// ...