console.log('============================');
console.log('Linked List Stack');

import { LinkedList, Node } from './linked-list.js';

class LinkedListStack<T> {
  private list = new LinkedList<T>();

  push(value: T): void {
    this.list.prepend(value);
  }

  pop(): Node<T> | null {
    return this.list.removeFromFront();
  }

  peek(): Node<T> | null {
    return this.list.head;
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }

  size(): number {
    return this.list.size;
  }

  print(): void {
    this.list.print();
  }
}

const stack = new LinkedListStack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
stack.print();
