// The Calculator
const betaCalc = {
  currentValue: 0,

  setValue(newValue) {
    this.currentValue = newValue;
    console.log(this.currentValue);
  },

  plus(addend) {
    this.setValue(this.currentValue + addend);
  },

  minus(subtrahend) {
    this.setValue(this.currentValue - subtrahend);
  },
};

// Using the calculator
betaCalc.setValue(3); // => 3
betaCalc.plus(3); // => 6
betaCalc.minus(2); // => 4
