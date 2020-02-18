const secondItem = {
  title: "Transformers",
  year: 2007,
  starring: new Map([
    [0, "Shia LaBeouf"],
    [1, "Megan Fox"]
  ])
};

// The third argument controls the spacing in the final string. If the argument is a number, each level in the stringification will be indented with this number of space characters.
JSON.stringify(secondItem, null, 2);
//{
//  "title": "Transformers",
//  "year": 2007,
//  "starring": {}
//}

JSON.stringify(secondItem, null, "🦄");
//{
//🦄"title": "Transformers",
//🦄"year": 2007,
//🦄"starring": {}
//}
