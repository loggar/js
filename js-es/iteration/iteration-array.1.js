var array = [1, 2, 3, 4, 5];

for (const element of array) {
	console.log(element);
}

for (let index = 0; index < array.length; index++) {
	console.log(array[index]);
}

array.forEach(element => {
	console.log(element);
});