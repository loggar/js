let multi = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];

multi.flat(); // [1,2,3,4,5,6,Array(4)]

multi.flat().flat(); // [1,2,3,4,5,6,7,8,9,Array(3)]

multi
  .flat()
  .flat()
  .flat(); // [1,2,3,4,5,6,7,8,9,10,11,12]
  
multi.flat(Infinity); // [1,2,3,4,5,6,7,8,9,10,11,12]
