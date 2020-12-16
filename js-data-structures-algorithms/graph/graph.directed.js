class DirectedGraph {
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
DirectedGraph.prototype.bfs = function (start) {
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

// find all path from a node
DirectedGraph.prototype.findAllPath = function (vertex, end, path = [], paths = []) {
  path.push(vertex);
  console.log("Current Path", path);
  if (vertex === end) {
    console.log("Found Valid", path);
    paths.push(JSON.parse(JSON.stringify(path)));
    return;
  }

  const nodeNeighbors = this.adjacencyList[vertex];
  for (let i = 0; i < nodeNeighbors.length; i++) {
    const currentNode = nodeNeighbors[i];
    console.log("travel", vertex, "->", currentNode);
    if (path.indexOf(currentNode) === -1) {
      var newPath = JSON.parse(JSON.stringify(path));
      this.findAllPath(currentNode, end, newPath, paths);
    }
  }

  return paths;
};

// Depth First Search (Recursive)
DirectedGraph.prototype.dfsRecursive = function (start) {
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
DirectedGraph.prototype.dfsIterative = function (start) {
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

DirectedGraph.prototype._detectCycleRec = function (
  vertex,
  visited,
  recStack,
  travelled
) {
  if (!visited[vertex]) {
    visited[vertex] = true;
    recStack[vertex] = true;
    const nodeNeighbors = this.adjacencyList[vertex];
    for (let i = 0; i < nodeNeighbors.length; i++) {
      const currentNode = nodeNeighbors[i];
      console.log("travel", vertex, "->", currentNode);
      if (travelled) {
        travelled.push({
          source: vertex,
          destination: currentNode,
        });
      }
      if (
        !visited[currentNode] &&
        this._detectCycleRec(currentNode, visited, recStack, travelled)
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

DirectedGraph.prototype.detectCycle = function () {
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

DirectedGraph.prototype.deleteCycle = function (cnt = 0) {
  const nodes = Object.keys(this.adjacencyList);
  const visited = {};
  const recStack = {};
  const travelled = {};
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    travelled[node] = [];
    if (this._detectCycleRec(node, visited, recStack, travelled[node])) {
      console.log("travelled", travelled);
      let cycleLastEdge = travelled[node][travelled[node].length - 1];
      console.log("cycleLastEdge", cycleLastEdge);
      this.removeEdge(cycleLastEdge.source, cycleLastEdge.destination);
      cnt++;
      return this.deleteCycle(cnt);
    }
  }
  return cnt;
};

DirectedGraph.prototype.deleteUnnecessaryOneDistanceEdge = function () {
  let cnt = 0;
  const nodes = Object.keys(this.adjacencyList);
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const oneDistanceDestinations = this.adjacencyList[node];
    for (let j = 0; j < oneDistanceDestinations.length; j++) {
      const paths = g.findAllPath(node, oneDistanceDestinations[j]);
      if (paths.length > 1) {
        g.removeEdge(node, oneDistanceDestinations[j]);
        cnt++;
      }
    }
  }
  return cnt;
};

DirectedGraph.prototype.toString = function () {
  return Object.assign({}, this.adjacencyList);
};

var g = new DirectedGraph();

g.addEdge("1", "2");
g.addEdge("1", "3");
g.addEdge("1", "4");
g.addEdge("1", "5");
g.addEdge("2", "4");
g.addEdge("2", "5");
g.addEdge("3", "5");
g.addEdge("4", "2");
g.addEdge("4", "5");
g.addEdge("5", "2");
console.log("graph", g.toString());

if (g.detectCycle()) {
  console.log("g.deleteCycle()", g.deleteCycle());
  console.log("graph", g.toString());
}

console.log(
  "g.deleteUnnecessaryOneDistanceEdge()",
  g.deleteUnnecessaryOneDistanceEdge()
);
console.log("graph", g.toString());
