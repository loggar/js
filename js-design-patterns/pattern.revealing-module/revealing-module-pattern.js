/*
One thing that the revealing module can do is avoiding repeat the name of the main object when we want to call one public method from another or access public variables.
*/

var myRevealingModule = (function() {
  var privateVariable = "not okay",
    publicVariable = "okay";
  function privateFun() {
    return privateVariable;
  }

  function publicSetName(strName) {
    privateVariable = strName;
  }

  function publicGetName() {
    privateFun();
  }

  return {
    setName: publicSetName,
    message: publicVariable,
    getName: publicGetName
  };
})();

//Usage:

myRevealingModule.setName("Marvin King");
