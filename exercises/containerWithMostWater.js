/**
 * Given an array of heights, we need to find the two heights 
 * in that array which can form two sides of container and
 * store most water and the area
 */

/**
 * 
 * @param {*} arr 
 * 
 * Approach : So we need to find indices of two numbers, 
 * h1 & h2 in that array which form a container with 
 * area h*d.
 * where h is smallest height between two number
 * d is the distance between h1 and h2 
 */

/**
 * Optimized solution
 * We can use two pointer approach p1 and p2, in which 
 * we can start from extreme ends of that array;
 * 
 * Where p1 points to first index and p2 to last
 * 
 * Area = Math.min(h1, h2) x (p2-p1)
 * where h1 is height at p1 and h2 is height at p2
 * 
 * if area more than max area replace
 * since the smallest height is used to finding area
 * we move the pointer of that index to next hoping
 * there is second number with more height
 * 
 */
const findMaxArea = (arr) => {
    let maxArea = 0, p1 = 0, p2 = arr.length - 1;
    while(p1 < p2) {
        const h = Math.min(arr[p1], arr[p2]);
        const d = p2 - p1;
        maxArea = Math.max(maxArea, h*d);
        if (arr[p1] < arr[p2]) {
            p1++;
        } else {
            p2--;
        }
    }
    return maxArea;
}

const heights = [2,3,1,5,6,9,10]; // length 6

console.log(findMaxArea(heights))