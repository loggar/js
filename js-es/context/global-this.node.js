console.log(this === global); // false, node

function a() {
  console.log(this === global); // true, node
}

a();
