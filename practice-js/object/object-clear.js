var obj = {
	a: "a"
};

// for enumerable properties
Object.keys(obj).forEach(function (prop) {
	delete obj[prop];
});

// for all properties
Object.getOwnPropertyNames(obj).forEach(function (prop) {
	delete obj[prop];
});

console.log(obj);
