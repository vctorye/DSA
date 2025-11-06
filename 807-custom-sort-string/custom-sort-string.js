/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const charCount = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let result = '';

    for (const char of  order) {
        if (charCount[char]) {
            result += char.repeat(charCount[char]);
            delete charCount[char];
        }
    }

    for (const char in charCount) {
        result += char.repeat(charCount[char])
    }
    return result;
};