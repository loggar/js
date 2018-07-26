/*
In a Next.js project I was creating, I had to limit a couple of functions to only executing on the browser side. I was able to do this cleanly with a simple function decorator.
*/

const onlyBrowser = f => () =>
	process.browser && f()

class MyComponent extends Component {
	componentWillMount = onlyBrowser(() =>
		console.log('This is the browser!')
	)
}
