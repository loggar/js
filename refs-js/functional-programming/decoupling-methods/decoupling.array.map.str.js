const map = f => x => Array.prototype.map.call(x, f) // now method map is detached from Array object by currying.

const dosomething = item => console.log(item)

map(dosomething)(['a', 'b', 'c'])

/*
We can even map over a string without the need to first cast it to an array of characters.
*/

const str = 'Kitty Cat'

// str.map(dosomething)
// TypeError: str.map is not a function

map(dosomething)(str)
