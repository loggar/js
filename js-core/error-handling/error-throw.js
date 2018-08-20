var alert = console.log;

function myFunction() {
	var winPoints = 3;
	var drawPoints = 1;

	try {
		if (drawPoints == 1) {
			throw ("Real Madrid will not qualify.");
		} else {
			var qualification = winPoints + drawPoints;
		}
	} catch (e) {
		alert("Error: " + e);
	}
}

myFunction();
