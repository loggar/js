const cats = [
	{ name: 'Mojo', months: 84 },
	{ name: 'Mao-Mao', months: 34 },
	{ name: 'Waffles', months: 4 },
	{ name: 'Pickles', months: 6 }
]

// typical poorly written `for loop`
var kittens = []
for (var i = 0; i < cats.length; i++) {
	if (cats[i].months < 7) {
		kittens.push(cats[i].name)
	}
}
console.log(kittens)

// functional, immutable(pure) style.
const isKitten = cat => cat.months < 7
const getName = cat => cat.name
const getKittenNames = cats =>
	cats.filter(isKitten)
		.map(getName)

const kittens2 = getKittenNames(cats)
console.log(kittens2)
