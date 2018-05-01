/*
The getOwnPropertyDescriptors method returns all of the own properties descriptors of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object’s prototype. 
*/

const obj = {
	get es7() { return 777; },
	get es8() { return 888; }
};
Object.getOwnPropertyDescriptors(obj);
  // {
  //   es7: {
  //     configurable: true,
  //     enumerable: true,
  //     get: function es7(){}, //the getter function
  //     set: undefined
  //   },
  //   es8: {
  //     configurable: true,
  //     enumerable: true,
  //     get: function es8(){}, //the getter function
  //     set: undefined
  //   }
  // }