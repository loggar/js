let foo = Object.create(null);
foo.hasOwnProperty = function () {};
Object.hasOwnProperty(foo, "hasOwnProperty"); // Error: Cannot convert object to primitive value
Object.hasOwn(foo, "hasOwnProperty"); // true
