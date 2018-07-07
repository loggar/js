import curry from 'ramda/src/curry'
import __ from 'ramda/src/__'  // special placeholder
import fs from 'fs'

const output = (err, data) => {
	if (err) return console.log('error:', err)
	console.log(data)
}

const readFile = curry(fs.readFile)

const outputUtf8File = readFile(__, 'utf8', output)


// Let's finish this example up with some refactoring (in the functional manner)
const files = ['readme.md','package.json']
files.map(outputUtf8File)
