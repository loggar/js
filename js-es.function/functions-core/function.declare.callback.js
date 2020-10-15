function mainProgram() {
	var arg = "abc";
	
	libFunction(arg, function(result) {
		console.log(result+"x");
	});
}

function libFunction(arg, callback) {
	var data = arg+"x";
	console.log(data);
	
	callback(data);
}

mainProgram();