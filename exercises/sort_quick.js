const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array = []) {
    const length = array.length;
    if (length <= 1) return array;

    const pivot = array[0];
    const leftArr = [], rightArr = [];
    for(let i = 1; i < length; i++) {
        if (array[i] > pivot) {
            rightArr.push(array[i]);
        } else {
            leftArr.push(array[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}


console.log(quickSort(numbers));
// console.log(numbers);