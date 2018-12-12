// promise
function getBooksByAuthorWithPromise(authorId) {
	return bookModel.fetchAll()
		.then(books => books.filter(b => b.authorId === authorId));
}

// async/await
async function getBooksByAuthorWithAwait(authorId) {
	const books = await bookModel.fetchAll();
	return books.filter(b => b.authorId === authorId);
}

// error handilng
class BookModel {
	fetchAll() {
		return new Promise((resolve, reject) => {
			window.setTimeout(() => { reject({ 'error': 400 }) }, 1000);
		});
	}
}
async function getBooksByAuthorWithAwait(authorId) {
	try {
		const books = await bookModel.fetchAll();
	} catch (error) {
		console.log(error);    // { "error": 400 }
	}
}

// using .catch
async function getBooksByAuthorWithAwait(authorId) {
	// books === undefined if error happens,
	// since nothing returned in the catch statement
	let books = await bookModel.fetchAll()
		.catch((error) => { console.log(error); });
}
