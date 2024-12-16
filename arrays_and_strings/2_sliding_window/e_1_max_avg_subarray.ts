/**
 * You are given an integer array nums consisting of n elements, and an integer k.
 * Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
 * Any answer with a calculation error less than 10-5 will be accepted.
 *
 * Example 1:
 * Input: nums = [1,12,-5,-6,50,3], k = 4
 * Output: 12.75000
 * Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
 *
 * Example 2:
 * Input: nums = [5], k = 1
 * Output: 5.00000
 */

function maxAvgSubarray(nums: number[], k: number): number {
  let left = 0;
  let sum = 0;
  let ans = Number.MIN_SAFE_INTEGER;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (right - left + 1 > k) {
      sum -= nums[left];
      left++;
    }

    if (right - left + 1 === k) {
      ans = Math.max(ans, sum);
    }
  }

  return ans / k;
}

console.log(maxAvgSubarray([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(maxAvgSubarray([-1], 1)); // -1
console.log(maxAvgSubarray([-1, -2, 0], 1)); // 0
console.log(
  maxAvgSubarray(
    [
      -6662, 5432, -8558, -8935, 8731, -3083, 4115, 9931, -4006, -3284, -3024,
      1714, -2825, -2374, -2750, -959, 6516, 9356, 8040, -2169, -9490, -3068,
      6299, 7823, -9767, 5751, -7897, 6680, -1293, -3486, -6785, 6337, -9158,
      -4183, 6240, -2846, -2588, -5458, -9576, -1501, -908, -5477, 7596, -8863,
      -4088, 7922, 8231, -4928, 7636, -3994, -243, -1327, 8425, -3468, -4218,
      -364, 4257, 5690, 1035, 6217, 8880, 4127, -6299, -1831, 2854, -4498,
      -6983, -677, 2216, -1938, 3348, 4099, 3591, 9076, 942, 4571, -4200, 7271,
      -6920, -1886, 662, 7844, 3658, -6562, -2106, -296, -3280, 8909, -8352,
      -9413, 3513, 1352, -8825,
    ],
    90
  )
); // 37.25556
