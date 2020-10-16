const funMap = new Map();

funMap.set(360, "My House Number"); // number as key
funMap.set(true, "I write blogs!"); // boolean as key

let obj = { name: "tapas" };
funMap.set(obj, true); // object as key

console.log(funMap);
