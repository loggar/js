const gbols = {};
gbols.platform = "bac";

Object.getOwnPropertyDescriptor(gbols, "platform");

// doesn't show up in a for .... in loop
// to have more control of this properties we use
Object.defineProperty(gbols, "role", {
  value: "Admin",
  writable: true,
  enumerable: false,
});

// Testing this out yeilds
for (const item in gbols) {
  console.log(item);
}
