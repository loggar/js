//global namespace
var g = "global";

function globalFunc() {
  function innerFunc() {
    console.log(g); // can access "g" because "g" is a global variable
  }
  innerFunc();
}
