/* Scope Chain
   Inside inner function perspective

   inner's scope -> outer's scope -> global's scope
  */

//Global Scope
var variable1 = "Comrades";
var variable2 = "Sayonara";

function outer() {
  //outer's scope
  var variable1 = "World";
  function inner() {
    //inner's scope
    var variable2 = "Hello";
    console.log(variable2 + " " + variable1);
  }
  inner();
}
outer();
// logs Hello World
// because (variable2 = "Hello") and (variable1 = "World") are the nearest
// variables inside inner's scope.
