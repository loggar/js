/*
 * What is the value of foo.length?
 * 
 */
(function () {
	var foo = [];
	foo.push(1);
	foo.push(2);

	console.log(foo.length); // 2
})();


/*
 * make this work duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
 */

// method
(function () {
	Array.prototype.duplicate = function () {
		var arr = this;
		this.push.apply(arr, arr);
		return arr;
	};

	var arr = [1, 2, 3, 4, 5];
	console.log(arr.duplicate());
})();

// copy array
(function () {
	var duplicate = function (arr) {
		newArr = arr.slice();
		arr.forEach(function (item) {
			newArr.push(item);
		})
		return newArr;
	}

	var arr = [1, 2, 3, 4, 5];
	console.log(duplicate(arr));
})();

// concat array
(function () {
	var duplicate = function (arr) {
		return arr.concat(arr);
	}

	var arr = [1, 2, 3, 4, 5];
	console.log(duplicate(arr));
})();
