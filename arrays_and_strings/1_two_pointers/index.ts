/**
 * Two pointers:
 *
 * Two integer variables that move along an iterable.
 * Usually named i,j or left, right. Each one represents an index of the iterable.
 *
 * There are multiple methods to implement two pointers:
 */

/**
 * Method 1: Start at the edges
 *
 * Start the pointers at the edges of the input. Move them towards each other until they meet.
 *
 * Instructions:
 * 1. Start one pointer at index 0 and the other at index input.length - 1
 * 2. Use a while loop until the pointers are equal to each other
 * 3. At each iteration of the loop, move the pointers towards each other. This means either:
 *      - Increment the pointer that started at index 0
 *      - Decrement the pointer that started at index input.length - 1
 *      - Both
 *
 * Deciding which pointers to move depend on the problem we are trying to solve!
 */

function twoPointersMethodOneInstructions(input: Array<any> | string) {
  let left = 0;
  let right = input.length - 1;
  while (left < right) {
    // Do logic here depending on the problem
    // Do more logic to decide if:
    // 1.
    left++;
    // 2.
    right--;
    // 3. (both)
    left++;
    right--;
  }
}

/**
 * Example:
 * Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise.
 */

function sumToTarget(nums: Array<number>, target: number): boolean {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return true;
    }

    if (sum > target) {
      right--;
    }

    if (sum < target) {
      left++;
    }
  }

  return false;
}

console.log(sumToTarget([1, 2, 4, 6, 8, 9, 14, 15], 29));

/**
 * Method 2 (applicable when the problem has 2 iterables): Move along both iterables simultenaously until all elements have been checked
 *
 * Instructions:
 * 1. Create 2 pointers, one for each iterable. Both sould start at the first index.
 * 2. Use a while loop until one of the pointers reaches the end of its iterable.
 * 3. At each iteration of the loop, move the pointers forward:
 *      - Move one of the pointers
 *      - Move both
 * 4. Our while loop will end when one of the pointers reaches the end of the iterable. This means the other pointer will not be at the end of its
 *    respective iterable. Sometimes, we need to iterate through all elements. Therefore, we must add extra logic to make sure both iterables
 *    are exhausted.
 */

function twoPointersMethodTwoInstructions(
  input1: Array<any>,
  input2: Array<any>
) {
  let i = 0;
  let j = 0;

  while (i < input1.length && j < input2.length) {
    // Add logic depending on the problem
    // Add more logic to decide to move either one or both of the pointers forward
    i++;
    j++;
  }

  // Add logic to make sure both iterables are exhausted
  while (i < input1.length) {
    // Add logic depending on the problem
    i++;
  }

  while (j < input2.length) {
    // Add logic depending on the problem
    j++;
  }
}

/**
 * Example:
 * Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.
 */

function combinedSortedArray(
  arr1: Array<number>,
  arr2: Array<number>
): Array<number> {
  let i = 0;
  let j = 0;

  const combined: Array<number> = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      combined.push(arr1[i]);
      i++;
    } else {
      combined.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    combined.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    combined.push(arr2[j]);
    j++;
  }

  return combined;
}

console.log(combinedSortedArray([1, 4, 7, 20], [3, 5, 6]));

/**
 * Example 2: Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 */

function isSubsequence(s: string, t: string): boolean {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    } else {
      j++;
    }
  }

  return i === s.length;
}

console.log(isSubsequence("ace", "abcde"));
