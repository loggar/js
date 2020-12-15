class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(source, destination) {
    if (!this.adjacencyList[source]) {
      this.addVertex(source);
    }
    if (!this.adjacencyList[destination]) {
      this.addVertex(destination);
    }
    this.adjacencyList[source].push(destination);
  }
  removeEdge(source, destination) {
    this.adjacencyList[source] = this.adjacencyList[source].filter(
      (vertex) => vertex !== destination
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex]) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

// Breadth First Search
Graph.prototype.bfs = function (start) {
  const queue = [start];
  const result = [];
  const visited = {};
  visited[start] = true;
  let currentVertex;
  while (queue.length) {
    currentVertex = queue.shift();
    result.push(currentVertex);
    this.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }
  return result;
};

// Depth First Search (Recursive)
Graph.prototype.dfsRecursive = function (start) {
  const result = [];
  const visited = {};
  const adjacencyList = this.adjacencyList;
  (function dfs(vertex) {
    if (!vertex) return null;
    visited[vertex] = true;
    result.push(vertex);
    adjacencyList[vertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        return dfs(neighbor);
      }
    });
  })(start);
  return result;
};

// Depth First Search (Iterative)
Graph.prototype.dfsIterative = function (start) {
  const result = [];
  const stack = [start];
  const visited = {};
  visited[start] = true;
  let currentVertex;
  while (stack.length) {
    currentVertex = stack.pop();
    result.push(currentVertex);
    this.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }
  return result;
};

Graph.prototype._detectCycleRec = function (vertex, visited, recStack) {
  if (!visited[vertex]) {
    visited[vertex] = true;
    recStack[vertex] = true;
    const nodeNeighbors = this.adjacencyList[vertex];
    for (let i = 0; i < nodeNeighbors.length; i++) {
      const currentNode = nodeNeighbors[i];
      console.log("travel", vertex, "->", currentNode);
      if (
        !visited[currentNode] &&
        this._detectCycleRec(currentNode, visited, recStack)
      ) {
        return true;
      } else if (recStack[currentNode]) {
        return true;
      }
    }
  }
  recStack[vertex] = false;
  return false;
};

Graph.prototype.detectCycle = function () {
  const nodes = Object.keys(this.adjacencyList);
  const visited = {};
  const recStack = {};
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (this._detectCycleRec(node, visited, recStack)) {
      return true;
    }
  }
  return false;
};

Graph.prototype.log = function () {
  console.log(this.adjacencyList);
};

var g = new Graph();

g.addEdge("1", "2");
g.addEdge("4", "5");
g.addEdge("3", "5");
g.addEdge("1", "4");
g.addEdge("1", "3");
g.addEdge("5", "2");
g.addEdge("4", "2");
g.addEdge("2", "4");

g.log();
console.log("g.detectCycle()", g.detectCycle());
