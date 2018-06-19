import "babel-polyfill"

async function showAvatar() {
	// read our JSON
	let response = await fetch('https://loggar.github.io/js/docs/sample-res/sample.1.json');
	let user = await response.json();

	// read github user
	let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
	let githubUser = await githubResponse.json();

	// show the avatar
	let img = {};
	img.src = githubUser.avatar_url;
	img.className = "promise-avatar-example";

	console.log(img);

	// wait 3 seconds
	await new Promise((resolve, reject) => setTimeout(resolve, 3000));

	return githubUser;
}

let githubUser = showAvatar();
console.log(githubUser);

/*
await won’t work in the top-level code

// syntax error in top-level code
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();

*/
