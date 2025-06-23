/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let left = 0; 
    let right = arr.length - k;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // compare distance between x and the edges of the window
        if (x - arr[mid] > arr[mid + k] -  x) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return arr.slice(left,left+k)
};