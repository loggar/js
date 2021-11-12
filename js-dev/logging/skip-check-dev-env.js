let logBad = (text) => {
  if (DEVELOPMENT) {
    console.log(text);
    // or some other way of logging
  } else {
    // idle
  }
};

let logGood;
if (DEVELOPMENT) {
  logGood = (text) => console.log(text);
} else {
  logGood = (text) => {};
}

//even better with a ternary
const log = DEVELOPMENT ? (text) => console.log(text) : (text) => {};
