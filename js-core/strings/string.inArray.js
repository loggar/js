var yellowOne = function () {
	console.log("It is an yellow one.");
}

if (fruit == 'banana' || fruit == 'lemon' || fruit == 'mango' || fruit == 'pineapple') {
	yellowOne();
}

switch (fruit) {
	case 'banana':
	case 'lemon':
	case 'mango':
	case 'pineapple':
		yellowOne();
}

if (['banana', 'lemon', 'mango', 'pineapple'].indexOf(fruit) >= 0) {
	yellowOne();
}

// jQuery
if ($.inArray(fruit, ['banana', 'lemon', 'mango', 'pineapple']) >= 0) {
	yellowOne();
}

// Underscore
if (_.contains(['banana', 'lemon', 'mango', 'pineapple'], fruit)) {
	yellowOne();
}

// custom
Array.prototype.contains = function (obj) {
	return this.indexOf(obj) > -1;
};
if (['banana', 'lemon', 'mango', 'pineapple'].contains(fruit)) {
	yellowOne();
}

// regex
if (fruit.match(/^(banana|lemon|mango|pineapple)$/)) {
	yellowOne();
}