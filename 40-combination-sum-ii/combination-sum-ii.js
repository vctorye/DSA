/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [];
    candidates.sort((a, b) => a- b)

    const backtrack = (remaining, path, start) => {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        if (remaining < 0) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            path.push(candidates[i]);

            backtrack(remaining - candidates[i],path,  i + 1)
            path.pop()
        }
    }

    backtrack(target, [], 0)
    return result
};