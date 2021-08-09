// every time you write code like this, you are composing functions:

const g = n => n + 1;
const f = n => n * 2;

const doStuff = x => {
	const afterG = g(x);
	const afterF = f(afterG);
	return afterF;
}

const r = doStuff(20);
console.log(r);

// every time you write a promise chain, you are composing functions:

const wait = time => new Promise((resolve, reject) => setTimeout(resolve, time));

wait(300)
	.then(() => 20)
	.then(g)
	.then(f)
	.then(v => console.log(v));

// when you compose function intentionally, you will do it better

const doStuffBetter = x => f(g(x));
const r2 = doStuffBetter(20);
console.log(r2);
