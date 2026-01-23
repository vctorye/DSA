/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];

    function backtrack(start, path, remain) {
        if (path.length === k && remain === 0) {
            result.push([...path]);
            return
        }

        if (path.length >= k && remain < 0) return;

        for (let i = start; i <= 9; i++) {
            path.push(i);
            backtrack(i + 1, path, remain - i);
            path.pop();
        }
    }

    backtrack(1, [], n);
    return result
};