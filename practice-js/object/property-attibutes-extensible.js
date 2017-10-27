// Create a sealed object with a frozen prototype and a nonenumerable property
var o = Object.seal(Object.create(Object.freeze({ x: 1 }), { y: { value: 2, writable: true } }));