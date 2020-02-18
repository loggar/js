var o = {
	a: "something",
	b: 1,
	c: true,
	d: new Date()
};

for(var p in o) {
	console.log(p + "=" + o[p]);
}



var sparseArray = ["a", "b", "c", "d", "e"];

for(var index in sparseArray) {
	console.log(index + ":" + sparseArray[index]);
}
