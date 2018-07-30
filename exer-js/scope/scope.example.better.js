var add_the_handlers = function (nodes) {
	var i;
	for (i = 0; i < 5; i += 1) {
		nodes.push(function (x) {
			return function () {
				console.log(x);
			}
		}(i));
	}
};

var nodes = [];
add_the_handlers(nodes);

nodes.forEach(function (e) {
	e();
});

/*
0
1
2
3
4
*/