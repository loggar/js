let getRandom = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};
console.log("Get random", getRandom(0, 10));
