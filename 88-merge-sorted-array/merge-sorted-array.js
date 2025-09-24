/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
     let i = m - 1, j = n - 1, k = m + n - 1;

     while (i >= 0 && j >= 0) {
        // if num1[i] is less than num2[j] then num[k] is num2[j]  
        if (nums1[i] < nums2[j]) {
            nums1[k] = nums2[j]
            //decrement for k and j
            k--;
            j--
        } else { // vice versa if num1[i] is greater than num2[j]
            nums1[k] = nums1[i];
            // decrement for k and i
            k--
            i--
        }
    }

       // if there are any left over then reaplce into array
    while (j >= 0) {
        nums1[k] = nums2[j];
        k--;
        j--;
    }
    while (i >= 0) {
        nums1[k] = nums1[i];
        k--;
        i--;
    }

};