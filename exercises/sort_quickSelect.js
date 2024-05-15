const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

/**
 * 
 * @param {*} array 
 * @param {*} indexToFind 
 * @returns 
 * 
 * Quick select is a sort and search algorithm which can be used to
 * find kth smallest or largest element in a sorted array
 */
function quickSelect(array = [], indexToFind = 0) {
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
    if (indexToFind <= leftArr.length) {
        // that means the element is on left side of pivot element
        return quickSelect(leftArr, indexToFind);
    } else if (indexToFind > (leftArr.length + 1)) {
        // that means the element is on right side of pivot element
        return quickSelect(rightArr, indexToFind - (leftArr.length + 1));
    } else {
        // pivot element is the required element
        return [pivot];
    }
}


console.log(quickSelect([5,1,3,2,4], 3)[0]);
// console.log(numbers);