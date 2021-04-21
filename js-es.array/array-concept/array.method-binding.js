const map = ["a", "b", "c"].map.bind([1, 2, 3]);
map((el) => console.log(el));

// (["a", "b", "c"].map.bind([1, 2, 3])).((el) => console.log(el));
