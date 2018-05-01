let numbers = [1, 2, 3, 4];
if (numbers.indexOf(2) !== -1) {
	console.log('Array contains value');
}

if (numbers.includes(2)) {
	console.log('Array contains value');
}


let numbers2 = [1, 2, 3, 4, NaN];
console.log(numbers2.indexOf(NaN)); //Prints -1
console.log(numbers2.includes(NaN)); //Prints true