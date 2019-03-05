// wrong : abusing constants :

var createUserBox = function createUserBox() {
	var WIDTH = '80px',
		HEIGHT = '80px';

	return {
		width: WIDTH,
		height: HEIGHT
	};
},

	createMenuBox = function createMenuBox() {
		var WIDTH = '200px',
			HEIGHT = '400px';

		return {
			width: WIDTH,
			height: HEIGHT
		};
	};

test('Avoid Constants', function () {
	var userBox = createUserBox(),
		menuBox = createMenuBox();

	equal(userBox.width, '80px',
		'userBox should be 80px wide.');

	equal(menuBox.width, '200px',
		'menuBox should be 200px wide.');
});

// right : favor configuration :

var createBox = function createBox(options) {
	var defaults = {
		width: '80px',
		height: '80px'
	};

	return $.extend({}, defaults, options);
};

test('Avoid Constants', function () {
	var userBox = createBox({
		width: '80px',
		height: '80px'
	}),

		menuBox = createBox({
			width: '200px',
			height: '400px'
		});

	equal(userBox.width, '80px',
		'userBox should be 80px wide.');

	equal(menuBox.width, '200px',
		'menuBox should be 200px wide.');
});