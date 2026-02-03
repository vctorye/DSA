/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var numWays = function(n, k) {
    if (n === 0) return 0;
    if (n === 1) return k;

    let prev1 = k * k;
    let prev2 = k;

    for (let i = 3; i <= n; i++) {
        current = (prev1 + prev2) * (k - 1);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1
};