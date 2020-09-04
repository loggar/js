// Replace content in a list in place
replace(mylist, anotherList);

const replace = (target, source) => {
  target.length = 0;
  return target.splice(0, 0, ...source); // not a good idea for large lists
};
