/*
Currying is when we call a function with fewer arguments than it expects.
In turn, the invoked function returns a function that takes the remaining arguments.
*/

import _ from "lodash"

const magicPhrase = _.curry((magicWord, muggleWord) => magicWord + muggleWord)
const muggleWordAccepter = magicPhrase("Abra kedabra ")
muggleWordAccepter("dishwasher")

const addFunction = _.curry((a, b) => a + b)
const addOne = add(1)
addTen(1)

/*
Why You Should Care About Currying

1. Currying gives us the ability to compose terse, concise and reusable functions.
2. We use these functions as clean, testable units of logic to compose the more logically complex parts of our programs.
3. With currying, any function that works on single elements can be converted into a function that works on arrays (lists), simply by wrapping it with map.
*/

const getObjectId = (obj) => obj.id // works on single object
const arrayOfObjects = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
const arrayOfIDs = arrayOfObjects.map(getObjectId)


/*
ex
*/

const getFirstTwoLettersOfWord = (word) => word.substring(0, 2)
// We can convert it, by wrapping it in the map method
["aabb", "bbcc", "ccdd", "ddee"].map(getFirstTwoLettersOfWord)