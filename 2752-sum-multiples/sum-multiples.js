/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let sum = 0;

    for (let i = 3; i <= n; i++) {
        if ( i % 3 === 0) {
            sum += i
            continue 
        }
        if ( i % 5 === 0) {
            sum += i
            continue 
        }
        if ( i % 7 === 0) {
            sum += i
            continue 
        }
    }  
    return sum
};