// use Map to find fruits by color
const fruitColor = new Map()
  .set("red", ["apple", "strawberry"])
  .set("yellow", ["banana", "pineapple"])
  .set("purple", ["grape", "plum"]);

function printFruits(color) {
  return fruitColor.get(color) || [];
}
