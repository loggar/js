const secondItem = {
  title: "Transformers",
  year: 2007,
  starring: new Map([
    [0, "Shia LaBeouf"],
    [1, "Megan Fox"]
  ])
};

let a = JSON.stringify(secondItem, (key, value) => {
  if (value instanceof Map) {
    return [...value.values()];
  }
  return value;
});
// {'title':'Transformers','year':2007,'starring':['Shia LaBeouf','Megan Fox']}

console.log(a);