/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) return i - 1;
    }
    return nums.length - 1
};