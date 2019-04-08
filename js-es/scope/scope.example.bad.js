var add_the_handlers = function (nodes) {
	var i;
	for (i = 0; i < 5; i += 1) {
		nodes.push(function () {
			console.log(i);
		});
	}
};

var nodes = [];
add_the_handlers(nodes);

nodes.forEach(function (e) {
	e();
});

/*
5
5
5
5
5
*/

/*
The add_the_handlers function was intended to give each handler a unique number
(i). It fails because the handler functions are bound to the variable i, not the value of
the variable i at the time the function was made
*/