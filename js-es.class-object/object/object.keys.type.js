const funObj = {};

// add a property. Note, passing the key as a number.
funObj[360] = "My House Number";

// It returns true because the number 360 got converted into the string '360' internally!
console.log(funObj[360] === funObj["360"]);
