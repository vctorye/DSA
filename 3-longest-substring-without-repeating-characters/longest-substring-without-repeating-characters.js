/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;

    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        for (let j = i + 1; j < s.length; j++) {
            if (!current.includes(s[j])) {
                current += s[j];
            } else {
                longest = Math.max(longest, current.length);
                break;
            }
        }
        longest = Math.max(longest, current.length);
    }
    return longest
};