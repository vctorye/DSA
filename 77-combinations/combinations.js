/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    // initiate rsult array
    let result = [];

    // create backtrack funciotn
    const backtrack = (start, current) => {
        // if k length is met then return
        if (current.length === k) {
            result.push([...current]);
            return
        }

        // loop through numbers of n for possible outcomes
        for (let i = start; i <= n; i++) {
            current.push(i);
            backtrack(i + 1, current);
            current.pop()
        }
    } 
    backtrack(1,[]);
    return result
};