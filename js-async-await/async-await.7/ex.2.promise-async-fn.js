async function add(a, b) {
  return a + b;
}

async function main() {
  const sum = await add(6, 4);
  console.log(sum); // "10"
}
