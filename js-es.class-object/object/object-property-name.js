// object util
function propName(obj, prop) {
  for (var i in obj) {
    if (obj[i] == prop) {
      return i;
    }
  }
  return false;
}

const o = {
  a: function () {},
  b: function () {},
};

console.log(propName(o, o.a));
console.log(propName(o, o.a) === "a");

const func = Object.getOwnPropertyNames(o).filter((item) => {
  console.log(item, propName(o, item));
  return typeof o[item] === "function" && item === "a";
});

console.log(func);
