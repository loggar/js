function step1() { console.log("fn step1"); }
function step1Failed() { console.log("fn step1Failed"); }
function step2() { console.log("fn step2"); }
function step3a() { console.log("fn step3a"); }
function step3b() { console.log("fn step3b"); }
function step3c() { console.log("fn step3c"); }
function step4() { console.log("fn step4"); }

async function main() {
	var ret = await step1();

	try {
		ret = await step2(ret);
	}
	catch (err) {
		ret = await step2Failed(err);
	}

	ret = await Promise.all([
		step3a(ret),
		step3b(ret),
		step3c(ret)
	]);

	await step4(ret);
}

main()
	.then(
	function fulfilled() {
		// `main()` completed successfully
	},
	function rejected(reason) {
		// Oops, something went wrong
	}
	);