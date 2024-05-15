const array = [-2,-1,0,1,2,3,4,5,6,7,8,9,10];

const binarySearch = (arr, target) => {
    let left = 0, right = arr.length - 1, loopCount = 0;
    while(left <= right) {
        loopCount++;
        let midIndex = Math.floor((left + right) / 2);
        if (arr[midIndex] == target) return [midIndex, loopCount];
        else if (arr[midIndex] < target) {
            left = midIndex + 1;
        } else {
            right = midIndex - 1;
        }
    }
    return [-1, loopCount];
}

console.log(binarySearch(array, 10))