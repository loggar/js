const array = [{ id: 1, checked: true }, { id: 2 }];
arr.find(item => item.id === 2); // { id: 2 }
arr.findIndex(item => item.id === 2); // 1
arr.some(item => item.checked); // true

const numberArray = [1, 2, 3, 4];
numberArray.includes(2); // true
