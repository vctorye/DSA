/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // find the initial sum of first k elements
    let sum = 0; 
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    // set maxsum
    let maxSum = sum;

    // use sliding window, update maxSum with either previous max sum or new sum
       for (let i = k; i < nums.length; i++) {
        // Add the next element and remove the first element of the previous window
        sum += nums[i] - nums[i - k];
        
        // Update maxSum if the new sum is greater
        maxSum = Math.max(maxSum, sum);
    }

    // Return the maximum average
    return maxSum / k;
};