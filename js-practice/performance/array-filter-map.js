// originalList : 200000 data
// under age of 22: 100000 of them

const under22People = originalList.filter(x => x.age < 22).map(x => x.name);
// 200000 + 100000 times

const under22People = [];
originalList.forEach(({ age, name }) => {
  age >= 18 && under22People.push(name);
});
// 200000 times

const under22People = originalList.reduce((acc, { age, name }) => {
  return age >= 18 ? [...ac, name] : acc;
}, []);
v; // 200000 times
