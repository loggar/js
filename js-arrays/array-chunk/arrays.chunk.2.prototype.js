/**
 * Define the chunk method in the prototype of an array
 * that returns an array with arrays of the given size.
 *
 * @param chunkSize {Integer} Size of every group
 */
Object.defineProperty(Array.prototype, "chunk", {
  value: function(chunkSize) {
    var that = this;
    return Array(Math.ceil(that.length / chunkSize))
      .fill()
      .map(function(_, i) {
        return that.slice(i * chunkSize, i * chunkSize + chunkSize);
      });
  }
});

(function main() {
  // Split in group of 3 items
  var result = [1, 2, 3, 4, 5, 6, 7, 8].chunk(3);
  // Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
  console.log(result);
})();
