class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor(func) {
    this.count = 0;
    this.head = undefined;
    this.equalFunc = func || defaultEq;
  }

  push(element) {
    const node = new Node(element);
    let current = this.head;
    if (this.head == undefined) {
      this.head = node; //1
    } else {
      while (current.next != null) {
        //2
        current = current.next;
      }
      current.next = node; //3
    }
    this.count++; //4;
    return;
  }

  getElementAt(index) {
    let node = this.head; // 1
    if (index >= 0 && index < this.count) {
      //2
      for (let i = 0; i < index; i++) {
        //3
        node = node.next;
      }
      return node; //4
    }
    return undefined; //5
  }

  insert(element, postion) {
    if (postion >= 0 && postion <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (postion == 0) {
        //1
        if (this.head == undefined) {
          this.head = node;
        }
        this.head = node;
        node.next = current;
      } else {
        let previous = this.getElementAt(postion - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
    }
  }

  indexOf(element) {
    let current = this.head; //1
    for (let index = 0; index < this.count && current != null; index++) {
      if (current.element == element) {
        //2
        return index;
      }
      current = current.next; //3
    }
    return -1; //4
  }

  removeAt(index) {
    if (this.isEmpty()) {
      return undefined; //1
    }
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index == 0) {
        // 2
        this.head = current.next; //3
      } else {
        let previous = this.getElementAt(index - 1); //4
        current = previous.next; //5
        previous.next = current.next; //6
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  remove(element) {
    if (this.isEmpty()) {
      return undefined;
    }
    let index = this.indexOf(element);
    if (index != -1) {
      this.removeAt(index);
    }
    return undefined;
  }
}
