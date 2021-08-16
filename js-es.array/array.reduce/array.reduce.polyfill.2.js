const reduce = (arr, callback, initVal) => {
  let result = initVal;

  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i], i, arr);
  }

  return result;
};

const arr = [1, 2, 3, 4, 5];

reduce(arr, (acc, item) => acc + item, 0);
