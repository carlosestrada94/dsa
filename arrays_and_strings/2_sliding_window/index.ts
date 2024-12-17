/**
 *
 * What is a subarray?
 *
 * It is a contiguous section of the array. This means
 * the elements in the subarray are taken as a continuous block
 * from the original array. There are no "skipped" elements
 * Also, the order of the elements in subarray is the same as they
 * appear in the original array.
 *
 * When to use Sliding window?
 *
 * There is a common group of problems related to subarrays that can
 * be solved efficiently using this approach.
 *
 * How to identify those problems?
 *
 * 1. The problem will implicitly or explicitly define the criteria that make
 *    a subarray valid. There are 2 components that maake the subarray valid:
 *      1. Constraint metric: This is an attribute of the subarray, such as
 *         the sum of its elements, the number of elements, the frequence of
 *         a specific element, etc.
 *      2. Numeric restriction on the constraint metric: Example: the sum of
 *         the elements must be less or equal than 10.
 *
 * 2. The problem will ask you to find valid subarrays in some way:
 *      1. Find the best valid subarray (sometimes the problem will tell what makes
 *         a subarray better than other. For example: find the "longest" valid subarray).
 *      2. Find the number of valid subarrays.
 *
 * The algorithm:
 *
 * A subarray can be defined by:
 *      1. Left bound: the index of the first element
 *      2. Right bound: the index of the last element
 *
 * 1. We start at left = right = 0. The first subarray we check is the first element of the array.
 * 2. We expand the window (subarray) to the right by adding elements. This is done by incrementing right.
 * 3. If the subarray becomes invalid, we shrink the window. This is done by incrementing left.
 * 4. The window slides along to the right until it reaches the end of the array.
 */

/**
 * Implementation example:
 * Given an array of positive integers nums and an integer k, find the length
 * of the longest subarray whose sum is less than or equal to k
 */

function implementationExample(nums: number[], k: number): number {
  let sum = 0;
  let ans = 0;
  // We start at left = right = 0
  let left = 0;
  // Expand the window until end of input
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    // Shrink the window if subarray becomes invalid
    while (sum > k) {
      sum -= nums[left];
    }
    // At the end of iteration, the subarray is valid. Therefore, we update the answer
    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}

/**
 * Example 2: You are given a binary string s (a string containing only "0" and "1").
 * You may choose up to one "0" and flip it to a "1".
 * What is the length of the longest substring achievable that contains only "1"?
 */

function longestSubstring(s: string): number {
  let left = 0;
  let count = 0;
  let ans = 0;

  for (let right = 0; right < s.length; right++) {
    if (s[right] === "0") {
      count++;
    }

    while (count > 1) {
      if (s[left] === "0") {
        count -= 1;
      }
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}

// console.log(longestSubstring("1101100111")); // 5
// console.log(longestSubstring("11111")); // 5
// console.log(longestSubstring("1110111")); // 7
// console.log(longestSubstring("0")); // 1
// console.log(longestSubstring("000")); // 1
// console.log(longestSubstring("01010101")); // 3

/**
 * Number of subarrays
 *
 * We can use the Sliding window method when the problem asks for the number of subarrays that fit some constraint.
 * However, we need to use a trick to calculate the number of subarrays:
 *    - We have a window defined by (left, right). How many valid windows end at index right?
 *        - The current window is valid (left, right)
 *        - Then (left + 1, right), (left + 2, right) ... (right, right)
 *        - The statement above means that when right is fixed, left could take any value from left to right inclusive.
 *          Therefore, the number of valid windows ending at index right is equal to the size of the window right - left + 1.
 */

/**
 * Example:
 *
 * Given an array of positive integers nums and an integer k, return the number of subarrays where the product of all the elements
 * in the subarray is strictly less than k.
 *
 * For example, given the input nums = [10, 5, 2, 6], k = 100, the answer is 8: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
 */

function numberOfSubarraysWithProductLessThanK(
  nums: number[],
  k: number
): number {
  if (k <= 1) {
    return 0; // Because all numbers in nums, are >= 1. Therefore, there is no window with product < 1
  }

  let left = 0;
  let product = 1;
  let ans = 0;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];

    while (product >= k) {
      product /= nums[left];
      left++;
    }

    ans += right - left + 1;
  }

  return ans;
}

// console.log(numberOfSubarraysWithProductLessThanK([10, 5, 2, 6], 100));

/**
 * Fixed window size
 *
 * Sometimes, the problem will specify a fixed length k for the window.
 * These problems are easier, because the difference between adjacent window is only two elements:
 *    - We add one element to the right.
 *    - Remove one element to the left.
 *
 * The algorithm:
 *    1. Build the first window of length k, from index 0 to index k-1
 *    2. Then, add element at index i, and remove element at index i - k
 */

/**
 * Example:
 * Given an integer array nums and an integer k, find the sum of the subarray with the largest sum whose length is k.
 */

function findLargestSum(nums: number[], k: number) {
  let sum = 0;
  let ans = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  ans = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    ans = Math.max(ans, sum);
  }

  return ans;
}

console.log(findLargestSum([3, -1, 4, 12, -8, 5, 6], 4));
