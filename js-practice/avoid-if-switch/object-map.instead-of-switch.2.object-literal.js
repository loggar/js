// use object literal to find fruits by color
const fruitColor = {
  red: ["apple", "strawberry"],
  yellow: ["banana", "pineapple"],
  purple: ["grape", "plum"]
};

function printFruits(color) {
  return fruitColor[color] || [];
}
