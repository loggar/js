evalBoolean(true);
evalBoolean(4);
evalBoolean({});
evalBoolean([]);
evalBoolean("some string");

function evalBoolean(b) {
	if (b) console.log("true");
	else console.log("false");
}