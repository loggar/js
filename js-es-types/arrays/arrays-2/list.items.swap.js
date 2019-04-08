// Swap elements at two locations
[items[3], items[5]] = [items[5], items[3]];

// Reserve capacity
// JavaScript arrays do not expose capacity. In fact,
// they are not arrays in the usual sense, since items
// are not stored contiguously in memory.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
// if you need something closer to the metal
