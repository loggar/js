/**
 * Returns an array with arrays of the given size.
 *
 * @param myArray {Array} array to split
 * @param chunk_size {Integer} Size of every group
 */
function chunkArray(myArray, chunk_size) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    myChunk = myArray.slice(index, index + chunk_size);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
}

(function main() {
  // Split in group of 3 items
  var result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
  // Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
  console.log(result);
})();
