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

  register(plugin) {
    const { name, exec } = plugin;
    this[name] = exec;
  },
};

// Define the plugin
const squaredPlugin = {
  name: "squared",
  exec: function () {
    this.setValue(this.currentValue * this.currentValue);
  },
};

// Register the plugin
betaCalc.register(squaredPlugin);

betaCalc.setValue(3); // => 3
betaCalc.plus(2); // => 5
betaCalc.squared(); // => 25
betaCalc.squared(); // => 625
