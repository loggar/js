const user = {
  firstName: "Joseph",
  lastName: "Kuruvilla",
  age: 38,
  address: {
    number: "239",
    street: "Ludwig Lane",
    city: "Chennai",
    zip: "600028",
    prop1: {
      prop2: {
        prop3: {
          prop4: {
            value: "sample",
          },
        },
      },
    },
  },
};
if (user && user.address) {
  console.log(user.address.zip);
  //600028
}
if (
  user &&
  user.address &&
  user.address.prop1 &&
  user.address.prop1.prop2 &&
  user.address.prop1.prop2.prop3 &&
  user.address.prop1.prop2.prop3.prop4
) {
  console.log(user.address.prop1.prop2.prop3.prop4.value);
  //sample
}
//Accessing unexisting property
console.log(user.address.prop102.po);
//Error
