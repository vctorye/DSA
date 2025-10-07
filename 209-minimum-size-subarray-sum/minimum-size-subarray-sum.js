/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0; 
    let currentSum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        //add to the sum till the sum is greater or equal to target 
        currentSum += nums[right];

        while (currentSum >= target) {
            // move the window to the right once target is hit 
            minLength = Math.min(minLength, right - left + 1);

            currentSum -= nums[left];
            left++
        }
    }
    return minLength === Infinity ? 0 : minLength
};