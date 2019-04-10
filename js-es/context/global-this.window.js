console.log(this === window); // true, window

function a() {
  console.log(this === window); // true, window
}

a();