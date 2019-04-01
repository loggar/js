// Backward
for (const item of items.reverse()) console.log(item);

// Partial segment iteration
for (const item of items.slice(1, 4)) console.log(item);

// Skipping elements
// step from element at index 1 to 6 (exclusive) by 2
items
  .slice(1, 6)
  .filter((item, index) => index % 2 == 0)
  .map(item => console.log(item));
