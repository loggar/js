const s = new Set();

s.add("one");
s.add("two");
s.add("abc");

for (const k of s.keys()) {
  console.log(k);
}
for (const k of s.values()) {
  console.log(k);
}

const i = s.entries();
console.log(i.next());

s.forEach((v) => console.log(v));

for (const k of s) {
  console.log(k);
}

// enumerate over a set

houseNos.forEach((value) => {
  console.log(value);
});

for (const value of houseNos) {
  console.log(value);
}
