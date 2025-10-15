/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    // check if its a palindrome
    let low = 0, high = s.length - 1;
    while (low < high) {
        if (s[low] !== s[high]) {
            return isPalindrome(low + 1,high, s) || isPalindrome(low,high - 1, s)
        } else {
            low++
            high--
        }
    }
    return true

    // create a helper function 
    function isPalindrome(low, high, s) {
        while (low < high) {
            if (s[low] !== s[high]) {
                return false
            } else {
                low++
                high--
            }
        }
        return true
    }
} 