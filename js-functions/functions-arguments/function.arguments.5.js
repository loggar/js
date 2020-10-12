function myFunc() {
  log(arguments.callee.name); // myFunc
}

myFunc(34, 89);
