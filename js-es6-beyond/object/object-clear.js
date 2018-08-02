let obj = {
	a: "a"
}

// for enumerable properties
for (const prop of Object.keys(obj)) {
	delete obj[prop];
}

// for all properties
for (const prop of Object.getOwnPropertyNames(obj)) {
	delete obj[prop];
}

console.log(obj)
