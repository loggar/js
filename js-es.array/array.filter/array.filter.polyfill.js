const filter = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr) && result.push(arr[i]);
  }
  return result;
};

const arr = [1, 2, 3, 4, 4, 5];
filter(arr, (item) => item % 2 !== 0);
