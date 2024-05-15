const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for(let i = 0; i < numbers.length; i++) {
        let smallestIndex = i;
        for(let j = i + 1; j < numbers.length; j++) {
            if (array[j] < array[smallestIndex]) {
                smallestIndex = j;
            }
        }
        [numbers[smallestIndex], numbers[i]] = [numbers[i], numbers[smallestIndex]]
    }
}

selectionSort(numbers);
console.log(numbers);