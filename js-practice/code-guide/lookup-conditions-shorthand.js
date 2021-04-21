// Longhand
if (type === "test1") {
  test1();
} else if (type === "test2") {
  test2();
} else if (type === "test3") {
  test3();
} else if (type === "test4") {
  test4();
} else {
  throw new Error("Invalid value " + type);
}
// Shorthand
var types = {
  test1: function () {},
  test2: function () {},
  test3: function () {},
  test4: function () {},
};

var func = types[type];
if (!func) {
  throw new Error("Invalid value " + type);
}
func();
