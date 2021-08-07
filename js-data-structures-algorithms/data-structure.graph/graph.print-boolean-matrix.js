// Implement a routine that takes an n X m Boolean array A together with an entry (x, y) and flips the color of the region associated with (x, y). – Aziz, Adnan, et al. Elements of Programming Interviews

// The 2 colors will be represented by 0’s and 1’s.
// In the example below, we start in the center of the array ([1,1]). Note that from that position, we can only reach the upper, leftmost triangular matrix. The rightmost, lowest position cannot be reached ([2,2]). Hence, at the end of the process, it’s the only color that is not flipped.

// Solution:
// Like in the previous question, we will code an array to define the 4 possible moves.
// We’ll use BFS to traverse the graph.
// We’ll modify the isFeasible function slightly. It will still check if the new position is within the boundaries of the matrix. The other requirement is that the new position is colored the same as the previous position. If the new position fits the requirements, its color is flipped.
// Time complexity: O(mn)

function flipColor(image, x, y) {
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let color = image[x][y];
  let queue = [];
  image[x][y] = Number(!color);
  queue.push([x, y]);
  let currentPosition, neighbor;
  while (queue.length) {
    currentPosition = queue.shift();
    for (const direction of directions) {
      neighbor = [
        currentPosition[0] + direction[0],
        currentPosition[1] + direction[1],
      ];
      if (isFeasible(image, neighbor, color)) {
        image[neighbor[0]][neighbor[1]] = Number(!color);
        queue.push([neighbor[0], neighbor[1]]);
      }
    }
  }
  return image;
}

function isFeasible(image, indices, color) {
  let x = indices[0],
    y = indices[1];
  return (
    x >= 0 &&
    x < image.length &&
    y >= 0 &&
    y < image[x].length &&
    image[x][y] == color
  );
}

var image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

var image2 = flipColor(image, 1, 1);

for (var i of image2) {
  console.log(i);
}
