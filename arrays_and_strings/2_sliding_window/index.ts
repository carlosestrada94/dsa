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
  let ans = 0;
  let zeroIndex: number | null = null;

  for (let right = 0; right < s.length; right++) {
    if (zeroIndex !== null) {
      ans = Math.max(ans, right - left + 1);
      left = zeroIndex + 1;
      zeroIndex = null;
    }

    if (s[right] === "0") {
      zeroIndex = right;
    }
  }

  return ans;
}

console.log(longestSubstring("1111100111"));
