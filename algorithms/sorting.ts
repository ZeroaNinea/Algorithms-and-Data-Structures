export function bubbleSort(arr: number[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j]! > arr[j + 1]!) {
        const temp = arr[j];
        arr[j]! = arr[j + 1]!;
        arr[j + 1] = temp!;
      }
    }
  }
}

export function insertionSort(arr: number[]): void {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j]! < arr[j - 1]!) {
      const temp = arr[j];
      arr[j] = arr[j - 1]!;
      arr[j - 1] = temp!;
      j--;
    }
  }
}
