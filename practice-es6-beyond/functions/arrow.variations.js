// No parameters
const af1 = () => 42
const af2 = _ => 42

// Single parameter
const af3 = x => 42
const af4 = (x) => 42

// Multiple parameters
const add = (x, y) => x + y

// Statements (as opposed to expressions)
// have to have a return statement
var feedTheCat = (cat) => {
	if (cat === 'hungry') {
		return 'Feed the cat';
	} else {
		return 'Do not feed the cat';
	}
}

// block body
// have to have a return statement
var addValues = (x, y) => {
	return x + y
}

// Object literals
// needs to be wrapped in parentheses
const af5 = (x) => ({value : x})

