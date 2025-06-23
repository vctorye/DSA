/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (count[char]) {
            count[char]--;
        }
    }
    let steps = 0;
    for (let char in count) {
        steps += count[char];
    }
    return steps
};

