var messages = [],
	handlers = {
		get(target, key) {
			// string value?
			if (typeof target[key] == "string") {
				// filter out punctuation
				return target[key]
					.replace(/[^\w]/g, "");
			}

			// pass everything else through
			return target[key];
		},
		set(target, key, val) {
			// only set unique strings, lowercased
			if (typeof val == "string") {
				val = val.toLowerCase();
				if (target.indexOf(val) == -1) {
					target.push(val);
				}
			}
			return true;
		}
	},
	messages_proxy =
		new Proxy(messages, handlers);

// elsewhere:
messages_proxy.push(
	"heLLo...", 42, "wOrlD!!", "WoRld!!"
);

messages_proxy.forEach(function (val) {
	console.log(val);
});
// hello world

messages.forEach(function (val) {
	console.log(val);
});
// hello... world!!