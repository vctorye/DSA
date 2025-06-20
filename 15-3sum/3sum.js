/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = []
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }

        let left = i + 1, right = nums.length - 1;
       
        while (left < right) {
            let total = nums[i] + nums[left] + nums[right];

            if (total > 0) {
                right--;
            } else if (total < 0) {
                left++
            } else {
                res.push([nums[i], nums[left], nums[right]]);
                left++
                while (nums[left] === nums[left - 1] && left < right){
                    left++
                }
            }
        }
    }
    return res
 };