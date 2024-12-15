/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 *
 * Example 1:
 * Input: nums = [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 *
 * Example 2:
 * Input: nums = [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 *
 * Constraints:
 * 1 <= nums.length <= 10E4
 * -10E4 <= nums[i] <= 10E4
 * nums is sorted in non-decreasing order.
 */

function sortedSquares(nums: number[]): number[] {
  const ans: number[] = [];
  let i = 0;
  let j = nums.length - 1;

  if (nums[0] > 0 && nums[nums.length - 1] > 0) {
    while (i <= j) {
      ans.push(nums[i] ** 2);
      i++;
    }
    return ans;
  }

  if (nums[0] < 0 && nums[nums.length - 1] < 0) {
    while (j >= i) {
      ans.push(nums[j] ** 2);
      j--;
    }
    return ans;
  }

  let k = nums.length - 1;

  while (i <= j) {
    if (nums[i] ** 2 > nums[j] ** 2) {
      ans[k] = nums[i] ** 2;
      i++;
    } else {
      ans[k] = nums[j] ** 2;
      j--;
    }
    k--;
  }

  return ans;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
console.log(sortedSquares([-5, -3, -2, -1]));
console.log(sortedSquares([1, 2, 3, 5]));
console.log(sortedSquares([0]));
console.log(sortedSquares([1, 0]));
console.log(sortedSquares([-10000, -9999, -7, -5, 0, 0, 10000]));
