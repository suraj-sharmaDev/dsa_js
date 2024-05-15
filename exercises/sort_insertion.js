const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array = []) {
    /**
     * 1. first test if the number at 0th position is larger than nth number 
     *    if it is insert it at 0th index (note not swap but insert)
     * 2. test nth number with all n-1th number if there exists a number smaller than
     *    it then insert it there
     * 
     */
    for(let i = 0; i < numbers.length; i++) {
        if (array[i] < array[0]) {
            // insert ith element to 0th position and remove it from ith
            array.unshift(array.splice(i, 1)[0]);
        } else {
            // find the position to insert
            for(let j = 1; j <= i; j++) {
                if (array[i] < array[j] && array[i] >= array[j-1]) {
                    array.splice(j, 0, array.splice(i, 1)[0]);
                    break;
                }
            }
        }
    }
}

insertionSort(numbers);
console.log(numbers);