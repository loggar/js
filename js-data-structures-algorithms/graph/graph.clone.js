// Consider a vertex type for a directed graph in which there are two fields: an integer label and a list of references to other vertices. Design an algorithm that takes a reference to a vertex u, and creates a copy of the graph on the vertices reachable from u. Return the copy of u. – Aziz, Adnan, et al. Elements of Programming Interviews

class GraphVertex {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

function cloneGraph(g) {
  if (g == null) {
    return null;
  }
  let vertexMap = {};
  let queue = [g];
  vertexMap[g] = new GraphVertex(g.value);
  while (queue.length) {
    let currentVertex = queue.shift();
    currentVertex.edges.forEach((v) => {
      if (!vertexMap[v]) {
        vertexMap[v] = new GraphVertex(v.value);
        queue.push(v);
      }
      vertexMap[currentVertex].edges.push(vertexMap[v]);
    });
  }
  return vertexMap[g];
}

let n1 = new GraphVertex(1);
let n2 = new GraphVertex(2);
let n3 = new GraphVertex(3);
let n4 = new GraphVertex(4);
n1.edges.push(n2, n4);
n2.edges.push(n1, n3);
n3.edges.push(n2, n4);
n4.edges.push(n1, n3);

cloneGraph(n1);
