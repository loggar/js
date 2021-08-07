// Let A be a 2D array whose entries are either W or B. Write a program that takes A, and replaces all Ws that cannot reach the boundary with a B. – Aziz, Adnan, et al. Elements of Programming Interviews

function fillSurroundedRegions(board) {
  if (!board.length) {
    return;
  }
  const numRows = board.length,
    numCols = board[0].length;
  let visited = [];
  for (let i = 0; i < numRows; i++) {
    visited.push(new Array(numCols).fill(false, 0, numCols));
  }
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] == "W" && !visited[i][0]) {
      markBoundaryRegion(i, 0, board, visited);
    }
    if (board[i][board.length - 1] == "W" && !visited[i][board.length - 1]) {
      markBoundaryRegion(i, board.length - 1, board, visited);
    }
  }
  for (let j = 0; j < board[0].length; j++) {
    if (board[0][j] == "W" && !visited[0][j]) {
      markBoundaryRegion(0, j, board, visited);
    }
    if (board[board.length - 1][j] == "W" && !visited[board.length - 1][j]) {
      markBoundaryRegion(board.length - 1, j, board, visited);
    }
  }
  for (let i = 1; i < board.length - 1; i++) {
    for (let j = 1; j < board.length - 1; j++) {
      if (board[i][j] == "W" && !visited[i][j]) {
        board[i][j] = "B";
      }
    }
  }
  return board;
}

function markBoundaryRegion(i, j, board, visited) {
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const queue = [];
  queue.push([i, j]);
  visited[i][j] = true;
  let currentPosition, neighbor;
  while (queue.length) {
    currentPosition = queue.shift();
    for (const direction of directions) {
      neighbor = [i + direction[0], j + direction[1]];
      if (isFeasible(board, visited, neighbor)) {
        visited[neighbor[0]][neighbor[1]] = true;
        queue.push(neighbor);
      }
    }
  }
}

function isFeasible(board, visited, neighbor) {
  let x = neighbor[0],
    y = neighbor[1];
  return (
    x >= 0 &&
    x < board.length &&
    y >= 0 &&
    y < board[x].length &&
    board[x][y] == "W"
  );
}

var board = [
  ["B", "B", "B", "B"],
  ["W", "B", "W", "B"],
  ["B", "W", "W", "B"],
  ["B", "B", "B", "B"],
];

fillSurroundedRegions(board);
