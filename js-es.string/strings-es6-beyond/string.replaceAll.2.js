// before ES2021 (ES12)

// using Regex to replace
"1 2 1 2 1 2".replace(new RegExp("2", "g"), "0");
// another option
"1 2 1 2 1 2".replace(/2/g, "0");

// we can create our own helper
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}

// ES2021
"1 2 1 2 1 2".replaceAll("2", "0");

"x".replace("", "_");
// '_x'
"xxx".replace(/(?:)/g, "_");
// '_x_x_x_'
"xxx".replaceAll("", "_");
// '_x_x_x_'
