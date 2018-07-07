import curry from 'ramda/src/curry'
import __ from 'ramda/src/__'  // special placeholder
import fs from 'fs'

const output = (err, data) => {
	if (err) return console.log('error:', err)
	console.log(data)
}

const readFile = curry(fs.readFile)

// 'readFile' can also be used like this because now we have more options
const files = ['readme.md', 'package.json']
files.map(readFile(__, 'utf8', output))
