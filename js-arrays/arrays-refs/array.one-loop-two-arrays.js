const exampleValues = [2, 15, 8, 23, 1, 32];
const [truthyValues, falseyValues] = exampleValues.reduce(
  (arrays, exampleValue) => {
    if (exampleValue > 10) {
      arrays[0].push(exampleValue);
      return arrays;
    }

    arrays[1].push(exampleValue);
    return arrays;
  },
  [[], []]
);
