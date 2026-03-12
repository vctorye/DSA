/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = Array(nums.length).fill(1);
    let n = nums.length;
    let maxLength = 1;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
        maxLength = Math.max(dp[i], maxLength);
    }

    return maxLength;
};