const m = new Map();
m.set(NaN, 'test');
m.get(NaN); //test

const m = new Map();
m.set(+0, 'test');
m.get(-0); //test
