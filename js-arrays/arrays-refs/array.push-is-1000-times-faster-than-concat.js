// extremely slow
arr1 = arr1.concat(arr2);

// Push contents of arr2 to arr1
arr1.push(arr2[0], arr2[1], arr2[3] /* , ... */, arr2[n]);

// Since my arrays are not fixed in size, I used `apply` instead
Array.prototype.push.apply(arr1, arr2);

// Prettier syntax with rest spread
arr1.push(...arr2);
