/*
import Ramda from 'ramda'
*/
const compose = Ramda.compose

const map = f => x => Array.prototype.map.call(x, f) // now method map is detached from Array object by currying.

/*
Decoupling allows us to compose functions:
*/

const doStuff = item => console.log(item)
const doSomething = item => console.log(item + ' another function')

const mapDoStuff = map(doStuff)
const mapDoSomething = map(doSomething)

// composing 2 mappings
const mapDoSomethingThenStuff =
	compose(mapDoStuff, mapDoSomething)
