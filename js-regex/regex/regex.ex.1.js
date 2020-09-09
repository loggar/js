"JavaScript".search(/script/i);

// No matter how it is capitalized, replace it with the correct capitalization
text.replace(/javascript/gi, "JavaScript");

// A quote is a quotation mark, followed by any number of
// nonquotation-mark characters (which we remember), followed
// by another quotation mark.
var quote = /"([^"]*)"/g;
// Replace the straight quotation marks with curly quotes,
// leaving the quoted text (stored in $1) unchanged.
text.replace(quote, '“$1”');


"1 plus 2 equals 3".match(/\d+/g) // returns ["1", "2", "3"]


var url = /(\w+):\/\/([\w.]+)\/(\S*)/;
var text = "Visit my blog at http://www.example.com/~david";
var result = text.match(url);
if (result != null) {
	var fullurl = result[0]; // Contains "http://www.example.com/~david"
	var protocol = result[1]; // Contains "http"
	var host = result[2]; // Contains "www.example.com"
	var path = result[3]; // Contains "~david"
}