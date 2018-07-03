var fs = require("fs");
var stream;
stream = fs.createReadStream(__dirname + "/files/data.txt");

stream.on("data", function (data) {
	var chunk = data.toString();
	console.log(chunk);
}); 
