const array = [-2, 10, 1, 13, -5, 11, 6, -3, 4, 0];

const partition = (arr, l, r) => {
  const pivot = arr[r];
  let i = l - 1;
  for (let index = l; index < r; index++) {
    // just push smaller values to left
    if (arr[index] < pivot) {
      i += 1;
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }

  // finally replace the i+1th term with pivot
  [arr[r], arr[i + 1]] = [arr[i + 1], arr[r]];
  return i + 1;
};

const qs = (arr, l, r) => {
  if (l >= r) return;
  const p = partition(arr, l, r);
  qs(arr, l, p - 1);
  qs(arr, p + 1, r);
};

const quickSort = (arr) => qs(arr, 0, arr.length - 1);

quickSort(array);

console.log(array);