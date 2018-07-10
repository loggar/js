/*
replace break by going functional
*/

const cats = [
	{ name: 'Mojo', months: 84 },
	{ name: 'Mao-Mao', months: 34 },
	{ name: 'Waffles', months: 4 },
	{ name: 'Pickles', months: 6 }
]
const isKitten = cat => cat.months < 7

var firstKitten

// a familiar old-school for loop example
for (var i = 0; i < cats.length; i++) {
	if (isKitten(cats[i])) {
		firstKitten = cats[i]
		break
	}
}

console.log(firstKitten)

// lodash equivalent
/*
const firstKitten = _.find(cats, isKitten)
*/

var first5Kittens = []
// old-school edge case kitty loop
for (var i = 0; i < cats.length; i++) {
	if (isKitten(cats[i])) {
		first5Kittens.push(cats[i])
		if (first5Kittens.length >= 5) {
			break
		}
	}
}

console.log(first5Kittens)

// lazy.js equvalent
/*
const result = Lazy(cats)
  .filter(isKitten)
  .take(5)
*/

const get5Kittens = () => {
	const newList = []

	// old-school edge case kitty loop
	for (var i = 0; i < cats.length; i++) {
		if (isKitten(cats[i])) {
			newList.push(cats[i])

			if (newList.length >= 5) {
				break
			}
		}
	}

	return newList
}

console.log(get5Kittens());


// recursion
const takeFirst = (limit, predicate, list, i = 0, newList = []) => {
	const isDone = limit <= 0 || i >= list.length
	const isMatch = isDone ? undefined : predicate(list[i])

	if (isDone) {
		return newList
	} else if (isMatch) {
		return takeFirst(limit - 1, predicate, list, i + 1, [...newList, list[i]])
	} else {
		return takeFirst(limit, predicate, list, i + 1, newList)
	}
}

console.log(takeFirst(5, isKitten, cats));

// replace 'if' with 'ternary style code'

/*
 * takeFirst2 acts like `filter`, but with a limit feature.
 *
 * @param {number} limit - The maximum number of matches to return
 * @param {function} predicate - The matching function, takes an item and returns true or false
 * @param {array} list - The list you want to filter
 * @param {number} [i] - Index to start searching from (default 0)
 */
const takeFirst2 = (limit, predicate, list, i = 0, newList = []) => {
	const isDone = limit <= 0 || i >= list.length
	const isMatch = isDone ? undefined : predicate(list[i])

	return isDone ? newList :
		isMatch ? takeFirst(limit - 1, predicate, list, i + 1, [...newList, list[i]])
			: takeFirst(limit, predicate, list, i + 1, newList)
}

console.log(takeFirst2(5, isKitten, cats));
