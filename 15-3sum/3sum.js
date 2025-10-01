/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let results = []
    for (let i = 0; i < nums.length - 2; i ++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            let sum = nums[left] + nums[right] + nums[i];

            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++
            } else {
                results.push([ nums[i], nums[left], nums[right]])
                left++
                while (nums[left] === nums[left - 1] && left < right){
                    left++
                }
            }
        }
    }
    return results; 
};

