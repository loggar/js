var alert = console.log;

function myFunction() {
	var passenger = 50;

	try {
		alert("The bus can sit " + passenger + " people");
	} catch (e) {
		alert("Error: " + e.description);
	} finally {
		alert("But my Tesla still rocks!");
	}
}

myFunction();
