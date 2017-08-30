var o = {};

o[Symbol("c")] = "yay";
o[2] = true;
o[1] = true;
o.b = "awesome";
o.a = "cool";

Reflect.ownKeys(o);                // [1,2,"b","a",Symbol(c)]
Object.getOwnPropertyNames(o);    // [1,2,"b","a"]
Object.getOwnPropertySymbols(o);    // [Symbol(c)]