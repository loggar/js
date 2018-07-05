const arr = new Array(20)

for (var i = 0; i < arr.length; i++) {
	arr[i] = {
		value: i
	}
	const _type = (i % 2 === 0) ? 'even' : 'odd'
	console.count(_type + ' added')
}
