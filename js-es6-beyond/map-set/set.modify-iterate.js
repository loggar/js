const s = new Set();

s.add('one');
s.add('two');
s.add('abc');

console.log(s.has('one')); //true
console.log(s.has('three')); //false

s.delete('one');

console.log(s);

console.log(s.size);

for (const k of s.keys()) {
  console.log(k);
}
for (const k of s.values()) {
  console.log(k);
}

const i = s.entries();
console.log(i.next());

s.forEach(v => console.log(v));

for (const k of s) {
  console.log(k);
}

s.clear();
