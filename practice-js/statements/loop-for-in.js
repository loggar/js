var o = {
	a: "something",
	b: 1,
	c: true,
	d: new Date()
};

for(var p in o) {
	console.log(p + "=" + o[p]);
}
