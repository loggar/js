// The Calculator
const betaCalc = {
  currentValue: 0,

  setValue(newValue) {
    this.currentValue = newValue;
    console.log(this.currentValue);
  },

  core: {
    plus: (currentVal, addend) => currentVal + addend,
    minus: (currentVal, subtrahend) => currentVal - subtrahend,
  },

  fn_empty: () => {
    console.log("no function.");
  },

  plugins: {},

  press(workName, newVal) {
    console.log(workName);

    const p = Object.getOwnPropertyNames(this.plugins).filter(
      (item) => typeof this.plugins[item] === "function" && item === workName
    );

    const c = Object.getOwnPropertyNames(this.core).filter(
      (item) => typeof this.core[item] === "function" && item === workName
    );

    let fn = p.length
      ? this.plugins[p[0]]
      : c.length
      ? this.core[c[0]]
      : this.fn_empty;

    this.setValue(fn(this.currentValue, newVal));
  },

  register(plugin) {
    const { name, exec } = plugin;
    this.plugins[name] = exec;
  },
};

// Our Plugin
const squaredPlugin = {
  name: "squared",
  exec: function (currentValue) {
    return currentValue * currentValue;
  },
};

// Register the plugin
betaCalc.register(squaredPlugin);

betaCalc.setValue(3); // => 3
betaCalc.press("plus", 2); // => 5
betaCalc.press("squared"); // => 25
betaCalc.press("squared"); // => 625
