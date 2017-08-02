function number_01() {
	var n1 = 255; // 정수표현
	var n2 = 255.0; // 실수표현
	var n3 = 0o377; // 8진수 표현
	var n4 = 0xff; //16진수 표현
	
	console.log(n1 + " : " + typeof n1);
	console.log(n2 + " : " + typeof n2);
	console.log(n3 + " : " + typeof n3);
	console.log(n4 + " : " + typeof n4);
}

function number_02_nan() {
	console.log(typeof NaN);
	
	var a = NaN;
	console.log(a);
	console.log(typeof a);
	
	var b = 10 * "text";
	console.log(b);
	
	console.log(isNaN(NaN)); // false
	
	console.log(isNaN(b)); // true 
	
	console.log(isFinite(b)); // is not in [Nan, Infinity, -Infinity]
}

function number_03_infinity() {
	console.log(typeof Infinity);
	
	var num = -Infinity;
	console.log(num);
	console.log(typeof num);
	
	console.log(Infinity - 3);
	console.log(Infinity * 3);
	console.log(Infinity - Infinity);
}

function number_04_math() {
	var sinx = Math.sin(1);
	var pi = Math.PI;
	var abs = Math.abs(-7.5);
	var ceil = Math.ceil(1.4);
	var round = Math.round(1.4);
	
	console.log(sinx);
	console.log(pi);
	console.log(abs);
	console.log(ceil);
	console.log(round);
}

function number_04_Number() {
	var o = 15;
	
	console.log(o.toString());
	console.log(o.toString(2));
	console.log(o.toString(8));
	console.log(o.toString(16));
	
	var primitiveNum = o.valueOf();
	console.log(primitiveNum);
	console.log(typeof o);
	console.log(typeof primitiveNum);
	
	console.log(Number.MIN_VALUE);
	console.log(Number.MAX_VALUE);
	console.log(Number.NEGATIVE_INFINITY);
	console.log(Number.POSITIVE_INFINITY);
	
	var v1 = "99";
	var v2 = Number(v1);
	
	console.log(typeof v2);
	console.log(v2);
	console.log(typeof v3);
}

/* test code */

number_01();
number_02_nan();
number_03_infinity();
number_04_math();
number_04_Number();

