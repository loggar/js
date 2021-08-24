class MyQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    return this.queue.unshift(item);
  }

  dequeue() {
    return this.queue.pop();
  }

  peek() {
    return this.queue[this.length - 1];
  }

  get length() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const myMovieQueue = new MyQueue();
myMovieQueue.enqueue("Sandra");
myMovieQueue.enqueue("Rob");
myMovieQueue.enqueue("Lisa");
myMovieQueue.enqueue("Kai");
console.log(myMovieQueue.length); // 4
console.log(myMovieQueue.peek()); // Sandra
myMovieQueue.dequeue();
myMovieQueue.dequeue();
console.log(myMovieQueue.peek()); // Lisa
