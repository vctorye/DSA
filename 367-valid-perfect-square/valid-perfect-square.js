/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let sqr = Math.sqrt(num);
    if (Number.isInteger(sqr)) {
        return true
    }
    return false
};