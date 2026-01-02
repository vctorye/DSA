/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, '')

    let left = 0;
    let right = newStr.length - 1;

    while (left < right) {
        if (newStr[left] !== newStr[right]) {
            return false
        }

        left++
        right--;
    }

    return true

};