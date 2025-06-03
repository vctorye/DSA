/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [];
    
    for (let char of s) {
        let last = stack[stack.length - 1];
        if (last && Math.abs(char.charCodeAt(0) - last.charCodeAt(0)) === 32) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('')
};
