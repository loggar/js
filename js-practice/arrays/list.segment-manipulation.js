// Split the list at arbitrary location
let left = items.slice(0, 4);
let right = items.slice(4, items.length);

// Multiple splits based on a match
let items = ['a', 'b', 'c', 'd', 'b', 'e'];
let splits = groupBy(items, item => item == 'b').filter(
  group => group.indexOf('b') == -1
);
// produces [['a'], ['c','d'], ['e']]

// groupBy is not built in. Groups items by whether or not they
// match the `keyFunction`. The result is an array of arrays
const groupBy = (items, keyFunction) => {
  const groups = [];

  let rest = items;
  while (rest.length > 0) {
    const { group, leftover } = nextGroup(rest, keyFunction);
    groups.push(group);
    rest = leftover;
  }

  return groups;
};

const nextGroup = (items, keyFunction) => {
  const startsWithKey = keyFunction(items[0]);

  const foundIndex = items.findIndex(
    item => startsWithKey != keyFunction(item)
  );
  const endIndex = foundIndex > -1 ? foundIndex : items.length;

  return { group: items.slice(0, endIndex), leftover: items.slice(endIndex) };
};

// Clear the list (in place)
items.length = 0;

// Remove segment
// delete 2 items starting with the second item (index 1)
let removedItems = items.splice(1, 2);

// Concatenate lists
let combined = items.concat(moreItems);

// Insert list at location
items.splice(index, 0, ...moreItems); //not a good idea for large lists

//Get a sublist
//sublist starting at position 1 up to, but excluding, position 3
let slice = items.slice(1, 3);
