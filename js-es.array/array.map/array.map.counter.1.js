let string = "kapilalipak";

const table = {};
for (let char of string) {
  table[char] = table[char] + 1 || 1;
}
console.log(table);
