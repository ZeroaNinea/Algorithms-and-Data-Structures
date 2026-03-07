console.log('============================');
console.log('Circular Queue');

class CircularQueue<T> {
  private queue: T[] = [];
  private head = 0;
  private tail = 0;

  enqueue(item: T): void {
    this.queue[this.tail] = item;
    this.tail = (this.tail + 1) % this.queue.length;
  }

  dequeue(): T | undefined {
    const item = this.queue[this.head];
    this.head = (this.head + 1) % this.queue.length;
    return item;
  }

  peek(): T | undefined {
    return this.queue[this.head];
  }

  get size(): number {
    return (this.tail - this.head + this.queue.length) % this.queue.length;
  }

  get isEmpty(): boolean {
    return this.size === 0;
  }
}

const circularQueue = new CircularQueue<number>();
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);
console.log(circularQueue.dequeue());
console.log(circularQueue.peek());
console.log(circularQueue.dequeue());
console.log(circularQueue.peek());
console.log(circularQueue.size);
console.log(circularQueue.isEmpty);
