let keys = Object.keys(hero);
let obj = {};

for (var i = 0; i < keys.length; i++) {
  obj[keys[i]] = keys[props[i]];
}
