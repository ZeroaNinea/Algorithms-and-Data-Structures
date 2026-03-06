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

export function mergeSort(arr: number[]): void {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    mergeSort(left);
    mergeSort(right);

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
      if (left[i]! < right[j]!) {
        arr[k] = left[i]!;
        i++;
      } else {
        arr[k] = right[j]!;
        j++;
      }
      k++;
    }

    while (i < left.length) {
      arr[k] = left[i]!;
      i++;
      k++;
    }

    while (j < right.length) {
      arr[k] = right[j]!;
      j++;
      k++;
    }
  }
}
