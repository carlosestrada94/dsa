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

export function maxAvgSubarray(nums: number[], k: number): number {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let ans = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    ans = Math.max(ans, sum);
  }

  return ans / k;
}

function maxAvgSubarraySolution2(nums: number[], k: number): number {
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
