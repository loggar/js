const g = n => n + 1;
const f = n => n * 2;

const doStuff = x => {
	const afterG = g(x);
	console.log(`after g: ${afterG}`);
	const afterF = f(afterG);
	console.log(`after f: ${afterF}`);
	return afterF;
}

doStuff(20)

// make function-composition with currying

const trace = label => v => {
	console.log(`${label}: ${v}`);
	return v;
}

const pipe = (...functions) => data => functions.reduce((value, func) => func(value), data);

const doStuffBetter = pipe(g, trace('after g'), f, trace('after f'));
doStuffBetter(20);
