// an observable to handle window resize events
// --------------------------------------------
var resize = new Observable((o) => {

	// function to handle resize event
	// and forward through observable
	function onResize() {
		var height = window.innerHeight;
		var width = window.innerWidth;
		o.next({ height, width });
	}

	// listen for window resize and pass height and width
	window.addEventListener("resize", onResize);

	// return a function that will clean up the handler
	return () => {
		window.removeEventListener("resize", onResize);
	};

});

// an observable to handle a data model change
// -------------------------------------------
var change = new Observable((o) => {

	// function to handle model change event
	// and forward through observable
	function onChange(key, value) {
		o.next({ key, value });
	}

	// listen for a data model's change event
	// and pass along the key and value that changed
	myModel.on("change", onChange);

	// return a function that will clean up the handler
	return () => {
		myModel.off("change", onChange);
	};
});

// observer
// --------
// create an observer to handle notfications
// from various observables
var observer = {
	next: (value) => {
		console.log("VALUE:", value);
	}
};

// subscriptions
// -------------
// listen for data from the observables
var resizeSubscription = resize.observe(observer);
var changeSubscription = change.observe(observer);

// clean up
// --------
// remove the observers to prevent memory leaks, etc
resizeSubscription.unsubscribe();
changeSubscription.unsubscribe();