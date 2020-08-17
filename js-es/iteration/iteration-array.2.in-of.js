const authors = ["Jade", "Dafe", "Gbols", "Daniel"];
// using with a for in loop
for (const author in authors) {
  console.log(author);
}
// logs 0,1,2,3

for (const author of authors) {
  console.log(author);
}
// logs Jade, Dafe, Gbols, Daniel
