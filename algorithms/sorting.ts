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

function partition(arr: number[], left: number, right: number): number {
  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j]! < pivot!) {
      i++;
      const temp = arr[i];
      arr[i] = arr[j]!;
      arr[j] = temp!;
    }
  }

  const temp = arr[i + 1];
  arr[i + 1] = arr[right]!;
  arr[right] = temp!;

  return i + 1;
}

export function quickSort(arr: number[], left: number, right: number): void {
  if (left < right) {
    const pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
}
