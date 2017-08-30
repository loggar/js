/* Ending Observation */

var obj = { a: 1, b: 2 };

Object.observe(obj, function observer(changes) {
	for (var change of changes) {
		if (change.type == "setPrototype") {
			Object.unobserve(
				change.object, observer
			);
			break;
		}
	}
});