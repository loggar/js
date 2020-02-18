const secondItem = {
  title: "Transformers",
  year: 2007,
  starring: new Map([
    [0, "Shia LaBeouf"],
    [1, "Megan Fox"]
  ])
};

// By returning undefined in the function, we can remove those items from the result.
JSON.stringify(secondItem, (key, value) => {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
});
// {"year":2007,"starring":{}}
