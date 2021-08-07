// Deadlock Detection (Cycle In Directed Graph)

// One deadlock detection algorithm makes use of a “wait-for” graph to track which other processes a process is currently blocking on. In a wait-for graph, processes are represented as nodes, and an edge from process P to 0 implies 0 is holding a resource that P needs and thus P is waiting for 0 to release its lock on that resource. A cycle in this graph implies the possibility of a deadlock. This motivates the following problem.
// Write a program that takes as input a directed graph and checks if the graph contains a cycle. – Aziz, Adnan, et al. Elements of Programming Interviews

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertAtHead(data) {
    let temp = new Node(data);
    temp.next = this.head;
    this.head = temp;
    return this;
  }
  getHead() {
    return this.head;
  }
}

class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.list = [];
    for (let i = 0; i < vertices; i++) {
      let temp = new LinkedList();
      this.list.push(temp);
    }
  }
  addEdge(source, destination) {
    if (source < this.vertices && destination < this.vertices) {
      this.list[source].insertAtHead(destination);
    }
    return this;
  }
}

const Colors = {
  WHITE: "white",
  GRAY: "gray",
  BLACK: "black",
};

Object.freeze(Colors);
function isDeadlocked(g) {
  let color = [];
  for (let i = 0; i < g.vertices; i++) {
    color[i] = Colors.WHITE;
  }
  for (let i = 0; i < g.vertices; i++) {
    if (color[i] == Colors.WHITE) {
      if (detectCycle(g, i, color)) {
        return true;
      }
    }
  }
  return false;
}

function detectCycle(g, currentVertex, color) {
  color[currentVertex] = Colors.GRAY;
  let neighbor;
  let nextNode = g.list[currentVertex].getHead();
  while (nextNode !== null) {
    neighbor = nextNode.data;
    if (color[neighbor] == Colors.GRAY) {
      return true;
    }
    if (color[neighbor] == Colors.WHITE && detectCycle(g, neighbor, color)) {
      return true;
    }
  }
  color[currentVertex] = Colors.BLACK;
  return false;
}

let g = new Graph(3);
g.addEdge(0, 1);
g.addEdge(0, 2);

isDeadlocked(g);
