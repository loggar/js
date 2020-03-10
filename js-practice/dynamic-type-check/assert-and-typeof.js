const assert = require("assert"); // https://nodejs.org/api/assert.html

//Define datatype constants, to basic js primitive types.
const NUMBER = "number";
const STRING = "string";
const DATE = "date";
const BOOL = "boolean";
const OBJECT = "object";

//I have created a basic function to avoid use the typeof many times.
const matchType = (data, type) => typeof data === type;

//NUMBER - success
assert(matchType(money, NUMBER), "Bad number format");

//NUMBER - throw exception
assert(matchType(name, NUMBER), "Bad number format");
