console.log(console.table)

if (typeof window === 'undefined') {
	console.table = console.log
}

const typeofConsole = [
	{ name: 'log', env: 'dev' },
	{ name: 'info', env: 'dev' },
	{ name: 'warn', env: 'pro' },
	{ name: 'error', env: 'pro' },
	{ name: 'table', env: 'dev' }
]

console.table(typeofConsole)

const a = {
	facebook: false,
	linkedin: true,
	flickr: false,
	instagram: false,
	stackoverflow: true,
	github: true,
	mozillar: true,
	hackernoon: true,
	freecodecamp: true
}

console.table(a)

