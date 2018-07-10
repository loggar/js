import fs from 'fs'

const output = (err, data) => {
	if(err) return console.log('error:', err)
	console.log(data)
}

// how do i partially apply for utf8?
fs.readFile('readme.md', 'utf8', output)
fs.readFile('package.json', 'utf8', output)

/*
// harrumph!
const outputUtf8File = file => fs.readFile(file, 'utf8', output)

For this example bind cannot be used because 'bind' will only apply arguments from left to right.
*/