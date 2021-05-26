console.log("1", this === global); // false, node

function a() {
  console.log("2", this === global); // true, node
}

a();
