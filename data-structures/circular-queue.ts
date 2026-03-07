console.log('============================');
console.log('Circular Queue');

class CircularQueue<T> {
  private items: T[] = [];
  private capacity: number;
  private currentLength: number;
  private rear: number;
  private front: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull(): boolean {
    return this.currentLength === this.capacity;
  }

  isEmpty(): boolean {
    return this.currentLength === 0;
  }

  enqcueue(item: T): void {
    if (this.isFull()) {
      throw new Error('X_X Queue is full.');
    }

    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = item;
    this.currentLength++;
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      throw new Error('X_X Queue is empty.');
    }

    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    return this.items[this.front];
  }
}

const circularQueue = new CircularQueue<number>(3);
circularQueue.enqcueue(1);
circularQueue.enqcueue(2);
circularQueue.enqcueue(3);
console.log(circularQueue.dequeue());
console.log(circularQueue.dequeue());
console.log(circularQueue.dequeue());
console.log(circularQueue.isEmpty);
console.log(circularQueue.isFull);
