function string_01() {
	var v1 = new Date();
	console.log(typeof v1);
	console.log(v1);
	
	var v2 = String(v1);
	console.log(typeof v2);
	console.log(v2);
	
	var v3 = 1234;
	console.log(typeof v3);

	var v4 = String(v3);
	console.log(typeof v4);
	console.log(v4);
	
}

function string_02_method() {
	var s1 = "My name is Charly Lee";
	
	console.log(s1.substring(3,9)); // both are index
	console.log(s1.substr(3,9)); // index and length
	
	console.log(s1.toLowerCase());
	console.log(s1.toUpperCase());
	
	console.log(s1.replace("Charly", "Rachel"));
	console.log(s1.concat(" and Hello,"));
}

function bool_01() {
	var b1 = false;
//	var b2 = new Boolean();
	var b2 = true;
	
	console.log(typeof b1);
	console.log(b1);
	console.log(typeof b2);
	console.log(b2);
}

/* test code */

string_01();
string_02_method();
bool_01();

