/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    // The backtrack function attempts to build combinations that sum to target
    const backtrack = (remain, path, start) => {
        // If remain is zero, we found a combination that meets the target
        if (remain === 0) {
            result.push([...path]); // Push a copy of the current path
            return; // End this path of exploration
        }
        // If remain is negative, this path cannot yield a valid combination
        if (remain < 0) return;

        // Explore candidates starting from the 'start' index to avoid duplicates
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]); // Choose the candidate
            backtrack(remain - candidates[i], path, i); // Explore further with reduced target
            path.pop(); // Undo the choice (backtrack) to try the next candidate
        }
    };

    backtrack(target, [], 0); // Initial call with full target and empty path
    return result;
};