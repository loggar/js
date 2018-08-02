var mammal_1 = {
	name: 'mammal_1',
	getName: function () {
		return this.name;
	},
	says: function () {
		return this.saying || '';
	}
}

var cat_1 = Object.create(mammal_1);
cat_1.name = 'cat_1';
cat_1.saying = 'meow';
cat_1.purr = function () {
	return "purr-";
}

console.log(cat_1.getName());
console.log(cat_1.says());
console.log(cat_1.purr());