// Longhand
function test1() {
  console.log("test1");
}
function test2() {
  console.log("test2");
}
var test3 = 1;
if (test3 == 1) {
  test1();
} else {
  test2();
}
// Shorthand
(test3 === 1 ? test1 : test2)();
