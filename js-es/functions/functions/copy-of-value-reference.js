var obj = {
	a : "str",
	b : 1,
	c : {},
	d : [],
	f : function () { console.log(obj); }
}

function fn(arg1) {
	console.log(arg1);
	arg1 = "str2";
}

function fn2(arg1) {
	console.log(arg1);
	arg1.x = "str2";
}

function fn3(arg1) {
	arg1();
}

fn(obj.a);
console.log(obj.a);

fn2(obj);
console.log(obj.x);

fn3(obj.f);

console.log(obj.change);



