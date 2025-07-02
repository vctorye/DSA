/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
     let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false; // If the current index is beyond maxReach, you can't proceed
        maxReach = Math.max(maxReach, i + nums[i]); // Update the maximum reach
    }

    return true;
};