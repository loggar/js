/*
Object.create has been an awesome utility for prototype creation.
While that's nice, objects created with Object.create have __proto__ and inherited Object properties which can be manipulated.
What if you simply want a dictionary not prone to manipulation from the outside?  You can have that with Object.create(null):
*/

let dict = Object.create(null);

// dict.__proto__ === "undefined"
// No object properties exist until you add them


/*
Since there's no prototype your Object can't be manipulated from the outside -- it remains as vanilla of a dictionary as possible!  Compare that to Object.create({}):
*/

let obj = Object.create({});

// obj.__proto__ === {}
// obj.hasOwnProperty === function

Object.prototype.someFunction = () => { };

// obj.someFunction === () => {};
// dict.someFunction === undefined


/*
Passing Object.create an empty object allows for properties to be added via Object.prototype.customPropName, something you may not always want.
*/