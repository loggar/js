function dosomething(obj) {
	console.group('do dosomething with obj');
	const _date = new Date();
	console.log('evaluating date:', _date);
	const _fullName = `${obj.firstName} ${obj.lastName}`;
	console.log('fullName:', _fullName);
	const _id = Math.random(1);
	console.log('id:', _id);
	console.groupEnd();
}

dosomething({ firstName: "First", lastName: "Last" });

console.group('Main')
console.log('Test')
console.group('1')
console.log('1 text')
console.group('1a')
console.log('1a text')
console.groupEnd()
console.groupCollapsed('1b')
console.log('1b text')
console.groupEnd()
console.groupEnd()
