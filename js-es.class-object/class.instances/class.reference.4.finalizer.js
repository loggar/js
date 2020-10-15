// finalizers allow you to react to the fact that your weakly referenced objects get garbage collected

let registry = new FinalizationRegistry((value) => {
  console.log("Object was removed:", value);
});

let myObject = {
  //....
};

registry.register(myObject, "myObject");

/*
Essentially you create a registry using FinalizationRegistry which takes a callback function as parameter. This function will get called everytime an object (previously registered using the register method) is collected.
The register method itself is the one you use to specify which object’s restruction you’re waiting for and the second argument of it, is the value that will be passed to the callback you originally defined when creating the registry.
*/
