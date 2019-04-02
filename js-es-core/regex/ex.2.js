// Find all five-digit numbers in a string. Note the double \\ in this case.
var zipcode = new RegExp("\\d{5}", "g");

var pattern = /Java/g;
var text = "JavaScript is more fun than Java!";
var result;
while ((result = pattern.exec(text)) != null) {
	console.log("Matched '" + result[0] + "'" + " at position " + result.index + "; next search begins at " + pattern.lastIndex);
}

var pattern = /java/i;
pattern.test("JavaScript"); // Returns true