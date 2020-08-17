const authors = {
  0: "Jade",
  1: "Dafe",
  2: "Gbols",
  3: "Daniel",
};

console.log(typeof authors);

for (const author in authors) {
  console.log(author);
  console.log(authors[author]);
}
