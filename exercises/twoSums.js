/**
 * Write a function to find indices of two numbers in an
 * array which adds up to target
 */

const arr = [1, 3, 5, 8, 6, 7];
const target = 11;

const findTwoSums = (nums, target) => {
  if (nums.length < 2) return null;
  const diffMap = new Map();
  for(let i = 0; i < nums.length; i++) {
    const currMapVal = diffMap.get(nums[i]);
    if (currMapVal >= 0) {
        return [i, currMapVal]
    }
    const diff = target - nums[i];
    diffMap.set(diff, i);
  }

  return null;
};

console.log("indices : ", findTwoSums(arr, target));
