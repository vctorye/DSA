/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    // create a dp array of length n+1 and initialize all values to 0
    let dp = new Array(n + 1).fill(0);
    
    // base cases: there is 1 unique BST for 0 nodes (empty tree) and 1 node.
    dp[0] = 1;
    dp[1] = 1;
    
    // iterate over the number of nodes from 2 to n
    for (let i = 2; i <= n; i++) {
        // consider each number j from 1 to i as the root
        for (let j = 1; j <= i; j++) {
            // the left subtree has j-1 nodes and the right subtree has i-j nodes.
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }
    
    // dp[n] now contains the number of unique BSTs that can be formed with n nodes.
    return dp[n];
};