/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindrome(left + 1, right, s) || isPalindrome(left, right - 1, s)
        } else {
            left++
            right--
        }
    }
    return true
} 

function isPalindrome(left, right, s) {
     while (left < right) {
        if (s[left] !== s[right]){
            return false
         } else {
            left++;
            right--;
        }
    }
    return true
}