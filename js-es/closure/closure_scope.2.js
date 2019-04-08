function generator(input) {
	var index = 0;
	return {
		next: function () {
			if (index < input.length) {
				index += 1;
				return input[index - 1];
			}
			return "";
		}
	}
}

var mygenerator = generator("boomerang");
console.log(mygenerator.next()); // "b"
console.log(mygenerator.next()); // "o"
mygenerator = generator("t1on");
console.log(mygenerator.next()); // "t"
console.log(mygenerator.next()); // "1"
