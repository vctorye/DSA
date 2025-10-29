/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    const charSet = new Set();

    for (const char of s) {
        if (charSet.has(char)) {
            charSet.delete(char);
        } else {
            charSet.add(char);
        }
    }

    return charSet.size <= 1
};