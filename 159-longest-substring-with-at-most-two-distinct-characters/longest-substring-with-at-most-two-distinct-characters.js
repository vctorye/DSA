/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    if (s.length <= 2) return s.length;

    const freq = {};
    let left = 0
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        freq[char] = (freq[char] ||0) + 1;

        while (Object.keys(freq).length > 2) {
            const leftChar = s[left];
            freq[leftChar]--

            if (freq[leftChar] === 0) {
                delete freq[leftChar];
            }
            left++
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen
};