let binarySearchWithPartition = (array, element, compare = defaultCompare) => {
  if (array.length === 0) {
    return -1;
  }
  const middle = Math.floor(array.length / 2);
  const comparison = compare(element, array.get(middle));

  if (comparison === 0) {
    return middle;
  }

  //bounce logic
  const [left, right] =
    comparison === -1 ? [0, middle - 1] : [middle + 1, array.length];
  //end of bounce logic

  const subIndex = binarySearchWithArraySplitting(
    array.slice(left, right),
    element,
    compare
  );

  return subIndex === -1 ? -1 : left + subIndex;
};

let binarySearchWithPartitionAndView = (array, ...args) =>
  binarySearchWithPartition(ArrayView(array), ...args);
