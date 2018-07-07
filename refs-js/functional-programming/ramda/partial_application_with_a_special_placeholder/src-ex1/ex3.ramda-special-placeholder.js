/*
Ramda has what they refer to as a Special Placeholder which is used to to partially apply arguments regardless of position.
*/

import curry from 'ramda/src/curry'
import __ from 'ramda/src/__'  // special placeholder
import fs from 'fs'

const output = (err, data) => {
	if (err) return console.log('error:', err)
	console.log(data)
}

// curry fs.readFile to add the magic
const readFile = curry(fs.readFile)

/*
Now that fs.readFile has been curried into 'readFile', we can use Ramda's special Placeholder (__) for the filename argument and partially apply, urf8, and output to 'readFile'.
*/

// partially apply utf and output
const outputUtf8File = readFile(__, 'utf8', output)

outputUtf8File('readme.md')
outputUtf8File('package.json')
