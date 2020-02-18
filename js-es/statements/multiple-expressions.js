let x = 5;

x = (x++, (x = addFive(x)), (x *= 2), (x -= 5), (x += 10));

function addFive(num) {
  return num + 5;
}
