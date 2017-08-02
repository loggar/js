function error_object() {
	try {
		console.log("try block.");
		throw new Error("an error occured.");
	} catch (e) {
		console.log("catch block.");
		console.log("e : " + e);
		console.log("typeof e : " + typeof e);
		console.log("e.name : " + e.name);
		console.log("e.message : " + e.message);
		console.log("e.toString() : " + e.toString());
		
	} finally {
		console.log("finally block.");
	}
}

/* test code */

error_object();