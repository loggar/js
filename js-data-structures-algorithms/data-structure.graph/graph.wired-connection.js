// Design an algorithm that takes a set of pins and a set of wires connecting pairs of pins, and determines if it is possible to place some pins on the left half of a PCB, and the remainder on the right half, such that each wire is between left and right halves. Return such a division, if one exists. – Aziz, Adnan, et al. Elements of Programming Interviews

// Solution:
// Model the set as a graph. The pins are represented by the vertices and the wires connecting them are the edges. We’ll implement the graph using an edge list.

function isBipartite(graph) {
  let color = [];
  for (let i = 0; i < graph.length; i++) {
    color[i] = -1;
  }
  for (let i = 0; i < graph.length; i++) {
    if (color[i] == -1) {
      let stack = [];
      stack.push(i);
      color[i] = 0;
      let node;
      while (stack.length) {
        node = stack.pop();
        for (const neighbor of graph[node]) {
          if (color[neighbor] == -1) {
            stack.push(neighbor);
            color[neighbor] = 1 - color[node];
          } else if (color[neighbor] == color[node]) {
            return false;
          }
        }
      }
    }
  }
  return true;
}

isBipartite([
  [],
  [2, 4, 6],
  [1, 4, 8, 9],
  [7, 8],
  [1, 2, 8, 9],
  [6, 9],
  [1, 5, 7, 8, 9],
  [3, 6, 9],
  [2, 3, 4, 6, 9],
  [2, 4, 5, 6, 7, 8],
]);
