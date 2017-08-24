function foo([x, y]) {
	console.log(x, y);
}

foo([1, 2]);                    // 1 2
foo([1]);                       // 1 undefined
foo([]);                        // undefined undefined


function foo2({ x, y }) {
	console.log(x, y);
}

foo2({ y: 1, x: 2 });                // 2 1
foo2({ y: 42 });                    // undefined 42
foo2({});                            // undefined undefined


function f3([x, y, ...z], ...w) {
	console.log(x, y, z, w);
}

f3([]);                            // undefined undefined [] []
f3([1, 2, 3, 4], 5, 6);                // 1 2 [3,4] [5,6]


function f6({ x = 10 } = {}, { y } = { y: 10 }) {
	console.log(x, y);
}

f6();                                // 10 10
f6({}, {});                        // 10 undefined


function f7({ x = 10 } = {}, { y } = { y: 10 }) {
	console.log(x, y);
}

f7();                                // 10 10
f7(undefined, undefined);            // 10 10
f7({}, undefined);                // 10 10

f7({}, {});                        // 10 undefined
f7(undefined, {});                // 10 undefined

f7({ x: 2 }, { y: 3 });            // 2 3