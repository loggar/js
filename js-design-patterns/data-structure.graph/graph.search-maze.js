// Given a 2D array of black and white entries representing a maze with designated entrance and exit points, find a path from the entrance to the exit, if one exists. – Aziz, Adnan, et al. Elements of Programming Interviews

// We’ll represent the white entries with 0’s and black entries with 1’s. The white entries represent open areas and the black entries walls. The entrance and the exit points are represented by an array, the 0th index and the 1st index filled with the row and column indices, respectively.

// Solution:
// To move to a different position, we’ll hardcode the four possible movements in the directions array (right, bottom, left and top; no diagonal moves):
// [ [0,1], [1,0], [0,-1], [-1,0] ]
// To keep track of the cells we have already visited, we will replace the white entries (0’s) with black entries (1's). We are basically using DFS recursively to traverse the maze. The base case, that will end the recursion, is either we have reached our exit point and return true or we have visited every white entry and return false.
// Another important thing to keep track of is to ensure that we are within the boundaries of the maze all the time and that we only proceed if we are at a white entry. The isFeasible function will take care of that.
// Time Complexity: O(V+E)

var hasPath = function (maze, start, destination) {
  maze[start[0]][start[1]] = 1;
  return searchMazeHelper(maze, start, destination);
};

function searchMazeHelper(maze, current, end) {
  // dfs
  if (current[0] == end[0] && current[1] == end[1]) {
    return true;
  }
  let neighborIndices, neighbor;
  // Indices: 0->top,1->right, 2->bottom, 3->left
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  for (const direction of directions) {
    neighborIndices = [current[0] + direction[0], current[1] + direction[1]];
    if (isFeasible(maze, neighborIndices)) {
      maze[neighborIndices[0]][neighborIndices[1]] = 1;
      if (searchMazeHelper(maze, neighborIndices, end)) {
        return true;
      }
    }
  }
  return false;
}

function isFeasible(maze, indices) {
  let x = indices[0],
    y = indices[1];
  return (
    x >= 0 &&
    x < maze.length &&
    y >= 0 &&
    y < maze[x].length &&
    maze[x][y] === 0
  );
}

var maze = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
];

console.log(hasPath(maze, [0, 4], [3, 2]));
