var { a: X, a: Y } = { a: 1 };

console.log(X , Y);

var { a: { x: X, x: Y }, a } = { a: { x: 1 } };

console.log(X , Y, a);

({ a: X, a: Y, a: [Z] } = { a: [1] });

X.push(2);
Y[0] = 10;

console.log(X , Y, Z);


var obj = {
	a: {
		b: [1, 2],
		e: { f: 3 }
	},
	g: 4
};

// harder to read:
var { a: { b: [c, d], e: { f } }, g } = obj;

// better:
var {
    a: {
        b: [c, d],
	e: { f }
    },
	g
} = obj;


var o = { a: 1, b: 2, c: 3 },
	a, b, c, p;

p = { a, b, c } = o;

console.log(a, b, c);            // 1 2 3
console.log(p === o);                        // true


var o = [1, 2, 3],
	a, b, c, p;

p = [a, b, c] = o;

console.log(a, b, c);            // 1 2 3
p === o;                        // true


var o = { a:1, b:2, c:3 },
    p = [4,5,6],
    a, b, c, x, y, z;

( {a} = {b,c} = o );
[x,y] = [z] = p;

console.log( a, b, c );            // 1 2 3
console.log( x, y, z );            // 4 5 4