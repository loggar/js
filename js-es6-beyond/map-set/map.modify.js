const m = new Map();

m.set('color', 'red');
m.set('age', 2);

const color = m.get('color');
const age = m.get('age');

m.delete('color');

m.clear();

const hasColor = m.has('color');

const size = m.size;
