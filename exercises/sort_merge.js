const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array = []) {
    const length = array.length;
    if (length <= 1) return array;
    const mid = Math.floor(length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr = [], rightArr = []) {
    const sorted = [];
    while(leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            sorted.push(leftArr.shift())
        } else {
            sorted.push(rightArr.shift())
        }
    }

    return [...sorted, ...leftArr, ...rightArr]
}


console.log(mergeSort(numbers));
// console.log(numbers);