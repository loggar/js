async function handler(req, res) {
	let response
	try {
		response = await request('https://user-handler-service')
	} catch (err) {
		logger.error('Http error', err)
		return res.status(500).send()
	}

	let document
	try {
		document = await Mongo.findOne({ user: response.body.user })
	} catch (err) {
		logger.error('Mongo error', err)
		return res.status(500).send()
	}

	executeLogic(document, req, res)
}

/*
In older versions of V8, unhandled promise rejections were silently dropped.
Now at least you get a warning from Node, so you don’t necessarily need to bother with creating a listener.
However, it is recommended to crash your app in this case as when you don’t handle an error, your app is in an unknown state:
*/

process.on('unhandledRejection', (err) => {
	console.error(err)
	process.exit(1)
})
