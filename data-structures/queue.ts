console.log('============================');
console.log('Queue');

class Queue<T> {
  private queue: T[] = [];

  enqueue(item: T): void {
    this.queue.push(item);
  }

  dequeue(): T | undefined {
    return this.queue.shift();
  }

  peek(): T | undefined {
    return this.queue[0];
  }

  get size(): number {
    return this.queue.length;
  }

  get isEmpty(): boolean {
    return this.queue.length === 0;
  }
}

const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size);
console.log(queue.isEmpty);
