function doSomething(arg1, arg2) {
  function nestedHelper(arg) {
    return process(arg);
  }

  return nestedHelper(arg1) + nestedHelper(arg2);
}

// The problem with above code is that every time you call doSomething, the nestedHeler is recreated. In order to prevent that you can use an IIFE (Immediately invoked function):

const result = (function() {
  function privateHelper(arg) {
    var result = process(arg);
    return result;
  }

  return function(arg1, arg2) {
    return privateHelper(arg1) + privateHelper(arg2);
  };
})();
