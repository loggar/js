const addWrapper = () => (x, y) => x + y;

const add = addWrapper();

const sum1 = add(1, 2); // 3

// Or we could do it like this

const sum2 = addWrapper()(4, 4); // 8

