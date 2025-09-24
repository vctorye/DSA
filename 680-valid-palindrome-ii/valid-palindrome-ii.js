/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let low = 0, high = s.length - 1;
    while(low < high) {
        if (s[low] !== s[high]) {
            return isPalindrome(low + 1, high, s) || isPalindrome(low, high - 1, s)
        }
        low++, high--
    }
    return true
    
}
function isPalindrome(low, high, str) {
    while(high > low) {
        if (str[low] !== str[high]) return false;

        low++, high--
    }
    return true
} 