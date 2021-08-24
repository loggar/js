var singletonPattern = (function() {
  var instance;
  function init() {
    // Singleton
    function privateMethod() {
      console.log("privateMethod");
    }
    var privateVariable = "this is private variable";
    var privateRandomNumber = Math.random();
    return {
      publicMethod: function() {
        console.log("publicMethod");
      },
      publicProperty: "this is public property",
      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  }

  return {
    // Get the singleton instance if one exists
    // or create if it doesn't
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

// Usage:
var single = singletonPattern.getInstance();
