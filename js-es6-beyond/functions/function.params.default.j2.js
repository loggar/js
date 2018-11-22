// before ES6
var link = function (height, color, url) {
	var height = height || 50;
	var color = color || 'red';
	var url = url || 'https://ex.com'

	console.log(height, color, url);
	// ...
}

// In ES6
var linkInEs6 = function (height = 50, color = 'red', url = 'https://ex.com') {
	console.log(height, color, url);
	// ...
}

link();
linkInEs6();
