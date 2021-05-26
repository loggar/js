console.log("1", this === window); // true, window

function a() {
  console.log("2", this === window); // true, window
}

a();
