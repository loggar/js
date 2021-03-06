require('isomorphic-fetch');

// Make a request for user.json
fetch('https://loggar.github.io/note/sample-res/sample.1.json')
	// Load it as json
	.then(response => response.json())
	// Make a request to github
	.then(user => fetch(`https://api.github.com/users/${user.id}`))
	// Load the response as json
	.then(response => response.json())
	// Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
	.then(githubUser => new Promise(function (resolve, reject) {
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
	}))
	.then(githubUser => console.log(`Finished showing ${githubUser.name}`));
	