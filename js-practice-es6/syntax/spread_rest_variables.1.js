function foo(x,y,z) {
	console.log(x, y, z);
}

foo(...[1,2,3]);

foo.apply(null, [4,5,6]);

foo.call(null, ...[7,8,9]);
