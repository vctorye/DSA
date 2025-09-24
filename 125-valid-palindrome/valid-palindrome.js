/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    
    return newStr === newStr.split('').reverse().join("")

};