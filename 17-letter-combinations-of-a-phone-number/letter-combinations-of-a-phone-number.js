/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const phoneMap = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let result = [];

    const backtrack = (combination, nextDigits, phoneMap, result) => {
        if (nextDigits.length === 0) {
            result.push(combination);
        } else {
            const letters = phoneMap[nextDigits[0] - '2'];

            for (const letter of letters) {
                backtrack(combination + letter, nextDigits.slice(1), phoneMap, result)
            }
        }
    }
    backtrack('', digits, phoneMap, result);
    return result
};