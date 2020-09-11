var r = [{ a: 1 }, { a: 2 }];

for (var i = 0; i < r.length; i++) {
  r[i].abc123 = i;
}

console.log(r);

var t = [];

for (var i = 0; i < r.length; i++) {
  var item = r[i];
  t.push({ ...item, abc124: "c:" + i });
}

console.log(t);
