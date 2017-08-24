var funcs = [];

for(let i=0; i<5; i++) {
	funcs.push(function() {
		console.log(i);
	});
}

console.log(funcs);
funcs[3]();

// equivalent code snippet more verbosely
var funcs2 = [];

for(var j =0; j< 5; j++) {
	let k = j;
	funcs2.push(function() {
		console.log(k);
	});
}

console.log(funcs2);
funcs2[3]();