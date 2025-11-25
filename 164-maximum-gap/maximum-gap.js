/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if (nums.length < 2) return 0; 
    let maxDiff = -Infinity;

    nums.sort((a, b) => a - b);

    for (let i = 1; i < nums.length; i++) {
        let diff = nums[i] - nums[i - 1];
        maxDiff = Math.max(maxDiff, diff);
    }

    return maxDiff
};