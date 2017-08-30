var obj = { a: 1 },
	handlers = {
		get(target, key, context) {
			// note: target === obj,
			// context === pobj
			console.log("accessing: ", key);
			return target[key];
		}
	},
	{ proxy: pobj, revoke: prevoke } =
		Proxy.revocable(obj, handlers);

pobj.a;
// accessing: a
// 1

// later:
prevoke();

pobj.a;
// TypeError