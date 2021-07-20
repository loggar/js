const someObject = {
  type: "Objects",
  data: [
    {
      id: "1",
      name: "Object 1",
      type: "Object",
      attributes: {
        color: "red",
        size: "big",
        arr: [1, 2, 3, 4, 5],
      },
    },
    {
      id: "2",
      name: "Object 2",
      type: "Object",
      attributes: {},
    },
  ],
};

console.log(someObject?.data[1]?.attributes?.color);
// undefined

console.log(someObject?.data?.[1]?.attributes?.arr?.[0]);
// undefined
