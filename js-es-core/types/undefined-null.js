function undefined_01() {
	var v1;
	console.log(typeof v1);
	console.log(v1);
	
	/*
	 * ReferenceError: v2 is not defined
	 */
// console.log(v2);
	
	var obj = {};
	console.log(typeof obj);
	console.log(obj);
	console.log(obj.a1);
	
	var v3;
	if(v1) {
		v3 = true; // undefined -> false;
	} else {
		v3 = false;
	}
	console.log(v3);
}

function null_01() {
	var v1;
	console.log(typeof v1); // undefined
	console.log(v1);
	
	v1 = null;
	console.log(typeof v1); // object
	console.log(v1);
	
	var v2;
	
//	console.log(v1 == v2); // null == undefined
	console.log(v1 === v2); // null !== undefined
}

/* test code */

// undefined_01();
null_01();

