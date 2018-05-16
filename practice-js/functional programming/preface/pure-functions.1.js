/*
Pure function

A pure function is deterministic.
This means, that given the same input, the function will always return the same output.
*/

const add = (x, y) => x + y

/*
An impure function
*/
const magicLetter = '*'
const createMagicPhrase = (phrase) => `${magicLetter}abra${phrase}`


/*
A pure function will not cause side effects. A side effect is any change in the system that is observable to the outside world

changing the file system
inserting a record into a database
making an http call
mutations
printing to the screen / logging
obtaining user input
querying the DOM
accessing system state
*/

const calculateBill = (sumOfCart, tax) => sumOfCart * tax

/*
A pure function : the two necessary characteristics

The function depends only on its arguments to produce a result
The function does not cause any side effects
*/
