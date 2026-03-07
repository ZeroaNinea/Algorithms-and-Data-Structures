console.log('============================');
console.log('Linked List');

class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value: T) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value: T) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.size++;
  }

  insert(index: number, value: T) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size) {
      this.append(value);
    } else {
      const node = new Node(value);
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current!.next;
      }
      node.next = current!.next;
      current!.next = node;
      this.size++;
    }
  }

  removeFrom(index: number) {
    if (index < 0 || index >= this.size) {
      return;
    }
    if (index === 0) {
      this.head = this.head!.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current!.next;
      }
      current!.next = current!.next!.next;
    }
    this.size--;
  }

  removeValue(value: T) {
    this.removeFrom(this.search(value));
  }

  search(value: T) {
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current!.value === value) {
        return i;
      }
      current = current!.next;
    }
    return -1;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      return undefined;
    }
    let current = this.head;
    let str = '';
    while (current) {
      str += current.value + ' ';
      current = current.next;
    }
    console.log(str);
  }
}

const list = new LinkedList<number>();
console.log(list.isEmpty());
console.log(list.getSize());
list.print();
list.prepend(1);
list.prepend(2);
list.prepend(3);
console.log(list.isEmpty());
console.log(list.getSize());
list.print();
list.append(4);
list.prepend(5);
list.print();
list.insert(2, 6);
list.print();
console.log(list.removeFrom(2));
list.print();
console.log(list.search(3));
console.log(list.removeFrom(100));
list.removeValue(3);
list.print();
list.reverse();
list.print();
