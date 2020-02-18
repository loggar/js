// Backward
for (const item of reverseGenerator(items)) console.log(item);

const reverseGenerator = function*(items) {
  for (let i = items.length - 1; i >= 0; i--) yield items[i];
};

// Partial segment iteration
for (const item of sliceGenerator(items, 1, 4)) console.log(item);

// Skipping elements
// step from element at index 1 to 6 (exclusive) by 2
for (const item of sliceGenerator(items, 1, 6, 2)) console.log(item);

const sliceGenerator = function*(
  items,
  start = 0,
  end = items.length,
  step = 1
) {
  for (let i = start; i < end; i += step) yield items[i];
};
