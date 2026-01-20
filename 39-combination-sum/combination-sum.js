/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];

    const backtrack = (remain, path, start) => {
        if (remain === 0) {
            result.push([...path]);
            return
        }

        if (remain < 0) return;

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtrack(remain - candidates[i], path, i);
            path.pop();
        }
    }

    backtrack(target, [], 0)
    return result
};