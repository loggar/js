var myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');

myMap.forEach(function (value, key) {
	console.log(key + ' = ' + value);
});
// Will show 2 logs; first with "0 = zero" and second with "1 = one"