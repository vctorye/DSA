/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = {}) {
    if (n === 1) return 1 
    if (n === 2) return 2

    memo[1] = 1
    memo[2] = 2;
    
    if (memo[n] !== undefined) return memo[n];

    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo )
    return memo[n]
};