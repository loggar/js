function myFunc() {
  log(arguments.callee.name); // myFunc
  log(arguments.callee.caller.name); // myFuncCaller
}

(function myFuncCallee() {
  myFuncCaller(34, 89);
})();
