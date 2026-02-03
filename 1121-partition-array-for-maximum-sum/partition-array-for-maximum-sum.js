/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length;
    const dp = Array(n + 1).fill(0);

    for (let i = 0; i <= n; i++) {
        let currMax = 0;

        for (let len = 1; len <= k && i - len >= 0; len++) {
            currMax = Math.max(currMax, arr[i - len]);
            dp[i] = Math.max(dp[i], dp[i - len] + currMax * len)
        }
    }

    return dp[n]
};