function outsideFunction() {
  const food = "Hamburger";
  console.log("Called outside");

  return function insideFunction() {
    console.log("Called inside");
    console.log(food);
  };
}

// Calls `outsideFunction`, which returns `insideFunction`
// Stores `insideFunction` as variable `fn`
const fn = outsideFunction();

// Calls `insideFunction`
fn();
