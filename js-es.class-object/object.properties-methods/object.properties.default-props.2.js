const unsafeOptions = {
  fontSize: 18,
};
const defaults = {
  fontSize: 16,
  color: "black",
};
const options = {
  ...defaults,
  ...unsafeOptions,
};
options.fontSize; // => 18
options.color; // => 'black'
