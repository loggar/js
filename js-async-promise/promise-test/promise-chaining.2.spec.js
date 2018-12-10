require('isomorphic-fetch');

it("Don't use new Promise(...), prefer chaining", (done) => {
	const url = 'https://loggar.github.io/note/docs/sample-res/sample.3.json';

	function badlyDesignedCustomFetch() {
		return new Promise((resolve, reject) => {
			fetch(url).then((response) => {
				if (response.ok) {
					resolve(response);
				} else {
					reject('Fetch failed');
				}
			});
		});
	}

	function wellDesignedCustomFetch() {
		return fetch(url).then((response) => {
			if (!response.ok) {
				return Promise.reject('Fetch failed');
			}
			return (response);
		});
	}

	Promise.all([
		badlyDesignedCustomFetch(),
		wellDesignedCustomFetch()
	]).then(done);
});