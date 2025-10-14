/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // base cases 
    if (digits.length === 0) return [];

    // phone map
    let phoneMap = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]

    let result = [];
    // create backtrack funcion
    function backtrack(combination, nextDigits, phoneMap, result) {
        // if the length of the digits is 0 then push the result into resultts
        if (nextDigits.length === 0) {
            result.push(combination)
        } else {    // else we call backtrack in a loop while slicing the first elemeent from digits
            const letters = phoneMap[nextDigits[0] - '2'];
            for (const letter of letters) {
                backtrack(combination+letter, nextDigits.slice(1), phoneMap, result);
            }
        }
    }

    backtrack("", digits, phoneMap, result);
    return result

};