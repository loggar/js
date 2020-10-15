function observer(changes) {
	for (var change of changes) {
		if (change.type == "recalc") {
			change.object.c =
				change.object.oldValue +
				change.object.a +
				change.object.b;
		}
	}
}

function changeObj(a, b) {
	var notifier = Object.getNotifier(obj);

	obj.a = a * 2;
	obj.b = b * 3;

	// queue up change events into a set
	notifier.notify({
		type: "recalc",
		name: "c",
		oldValue: obj.c
	});
}

var obj = { a: 1, b: 2, c: 3 };

Object.observe(
	obj,
	observer,
	["recalc"]
);

changeObj(3, 11);

obj.a;            // 12
obj.b;            // 30
obj.c;            // 3

/* The changes are by default delivered at the end of the current event loop (see the Async & Performance title of this series). If you want to deliver them immediately, use Object.deliverChangeRecords(observer). Once the change events are delivered, you can observe obj.c updated as expected: */

obj.c;            // 42



/* we called notifier.notify(..) with the complete change event record. An alternative form for queuing change records is to use performChange(..), which separates specifying the type of the event from the rest of event record's properties (via a function callback). Consider: */

/*
notifier.performChange( "recalc", function(){
    return {
        name: "c",
        // `this` is the object under observation
        oldValue: this.c
    };
} );
*/