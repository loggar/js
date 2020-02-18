const thirdItem = {
  title: "Transformers",
  year: 2007,
  starring: new Map([
    [0, "Shia LaBeouf"],
    [1, "Megan Fox"]
  ]),
  toJSON() {
    return {
      name: `${this.title} (${this.year})`,
      actors: [...this.starring.values()]
    };
  }
};

console.log(JSON.stringify(thirdItem));
// {"name":"Transformers (2007)","actors":["Shia LaBeouf","Megan Fox"]}
