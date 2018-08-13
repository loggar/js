const a = 100
const b = "test"
const c = null

a || b // 100
a && b // "test"
a || c // 100
a && c // null
b || c // "test"
b && c // null

// initializing variables
function greet(name) {
	name = name || 'visitor'
	console.log(`Hello, ${name}!`)
}
greet() // Hello, visitor!