const thisWayWorksToo = (x = 7, y = 8) => {
  return x + y;
};
console.log(thisWayWorksToo(3, 4)); // prints: 7
console.log(thisWayWorksToo()); // prints: 15
