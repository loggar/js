function finallyTest() {
  try {
    console.log("one");
    return "three";
  } catch (err) {
    console.log("error");
  } finally {
    console.log("two");
    // return "in finally";
  }
}

// finally always wins
console.log(finallyTest());
console.log("four");
