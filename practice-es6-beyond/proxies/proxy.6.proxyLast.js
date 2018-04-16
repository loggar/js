var handlers = {
	get(target, key, context) {
		return function () {
			context.speak(key + "!");
		};
	}
},
	catchall = new Proxy({}, handlers),
	greeter = {
		speak(who = "someone") {
			console.log("hello", who);
		}
	};

// setup `greeter` to fall back to `catchall`
Object.setPrototypeOf(greeter, catchall);

greeter.speak();                // hello someone
greeter.speak("world");        // hello world

greeter.everyone();                // hello everyone!