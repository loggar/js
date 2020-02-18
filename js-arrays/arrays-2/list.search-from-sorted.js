// Search a sorted list
const foundIndex = findFirst(sortedNumbers, 4);
if (foundIndex !== -1) console.log(`Found at ${foundIndex}`);

const findFirst = (sortedItems, target) => {
  const index = bisectLeft(sortedItems, target);
  return index < sortedItems.length && sortedItems[index] === target
    ? index
    : -1;
};

// bisectLeft is not built in. Performs a binary search
// for the left-most matching item. If the item isn't found,
// returns the index where it should go.
// Comparison only works properly if `valueOf` has been implemented.
const bisectLeft = (sortedItems, target) => {
  let start = 0;
  let end = sortedItems.length;

  while (start < end) {
    let mid = Math.trunc((start + end) / 2);
    if (sortedItems[mid] < target) start = mid + 1;
    else end = mid;
  }

  return start;
};
