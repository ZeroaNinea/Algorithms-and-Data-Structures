export function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

export function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid]! < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

function binarySearchRecursiveHelper(
  arr: number[],
  target: number,
  left: number,
  right: number,
): number {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid]! < target) {
    return binarySearchRecursiveHelper(arr, target, mid + 1, right);
  } else {
    return binarySearchRecursiveHelper(arr, target, left, mid - 1);
  }
}

export function binarySearchRecursive(arr: number[], target: number): number {
  return binarySearchRecursiveHelper(arr, target, 0, arr.length - 1);
}
