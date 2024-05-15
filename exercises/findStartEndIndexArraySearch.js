function binarySearch(array = [], key = null, left = 0, right = 0) {
    if (array.length == 0) return -1;
    let p1 = left, p2 = right, x = Infinity, y = -1;
    while (p1 <= p2) {
        count++;
        const mid = Math.floor((p1 + p2) / 2);
        if (array[mid] == key) {
            // if (mid > y) y = mid;
            // if (mid < x) x = mid;
            return mid;
        } else {
            if (array[mid] < key) {
                p1 = mid + 1;
            } else {
                p2 = mid - 1;
            }
        }
    }
    return -1;
}

const findIndexRangeForSearchKey = (array, key) => {
    let left = 0, right = array.length - 1;
    let firstIndex = binarySearch(array, key, left, right);
    if (firstIndex == -1) return [-1, -1];

    let temp1 = firstIndex, temp2 = firstIndex, lastIndex = firstIndex;
    // find left index
    while(firstIndex != -1) {
        temp1 = firstIndex;
        firstIndex = binarySearch(array, key, 0, temp1 - 1);
    }
    
    firstIndex = temp1;

    // find right index
    while(lastIndex != -1) {
        temp2 = lastIndex;
        lastIndex = binarySearch(array, key, temp2 + 1, right);
    }
    lastIndex = temp2;

    return [firstIndex, lastIndex]
}

let count = 0;

const numbers = [1,2,2,3,3,5,5,5,7,7,9,11,13];
// const numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(findIndexRangeForSearchKey(numbers, 13), count);