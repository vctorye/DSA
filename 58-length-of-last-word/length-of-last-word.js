/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimmed = s.trim().split(" ");
    return trimmed[trimmed.length -1].length
};