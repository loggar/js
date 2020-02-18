const secondItem = {
  title: "Transformers",
  year: 2007,
  starring: new Map([
    [0, "Shia LaBeouf"],
    [1, "Megan Fox"]
  ])
};

JSON.stringify(secondItem, ["title"]);
// {'title':'Transformers'}
