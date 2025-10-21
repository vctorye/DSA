/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // Pointer to track the position of the next valid element
    let position = 0;
    
    // Traverse through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is not equal to the target value
        if (nums[i] !== val) {
            // Move it to the position pointer and increment the pointer
            nums[position] = nums[i];
            position++;
        }
    }
    
    // The position now indicates the length of the modified array
    return position; 
};