
function step1() { console.log("fn step1"); }
function step1Failed() { console.log("fn step1Failed"); }
function step2() { console.log("fn step2"); }
function step3a() { console.log("fn step3a"); }
function step3b() { console.log("fn step3b"); }
function step3c() { console.log("fn step3c"); }
function step4() { console.log("fn step4"); }


function* main() {

	try {
		var ret = yield step1();
	}
	catch (err) {
		ret = yield step1Failed(err);
	}

	ret = yield step2(ret);

	// step 3
	ret = yield Promise.all([
		step3a(ret),
		step3b(ret),
		step3c(ret)
	]);

	yield step4(ret);
}


function run(gen) {
	var args = [].slice.call(arguments, 1), it;

	it = gen.apply(this, args);

	return Promise.resolve()
		.then(function handleNext(value) {
			var next = it.next(value);

			return (function handleResult(next) {
				if (next.done) {
					return next.value;
				}
				else {
					return Promise.resolve(next.value)
						.then(
						handleNext,
						function handleErr(err) {
							return Promise.resolve(
								it.throw(err)
							)
								.then(handleResult);
						}
						);
				}
			})(next);
		});
}

run(main)
	.then(
	function fulfilled() {
		// `*main()` completed successfully
		console.log("completed");
	},
	function rejected(reason) {
		// Oops, something went wrong
		console.log("wrong");
	}
	);