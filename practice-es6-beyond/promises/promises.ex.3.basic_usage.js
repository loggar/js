/*
Sometimes you don't need to complete an async tasks within the promise
-- if it's possible that an async action will be taken, however, returning a promise will be best so that you can always count on a promise coming out of a given function.
In that case you can simply call Promise.resolve() or Promise.reject() without using the new keyword. For example:
*/

var userCache = {};

function getUserDetail(username) {
	// In both cases, cached or not, a promise will be returned

	if (userCache[username]) {
		// Return a promise without the "new" keyword
		return Promise.resolve(userCache[username]);
	}

	// Use the fetch API to get the information
	// fetch returns a promise
	return fetch('users/' + username + '.json')
		.then(function (result) {
			userCache[username] = result;
			return result;
		})
		.catch(function () {
			throw new Error('Could not find user: ' + username);
		});
}

/*
Since a promise is always returned, you can always use the then and catch methods on its return value!
*/