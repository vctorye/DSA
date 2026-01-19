/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const string = s.split("");
    let stack = [];

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(') {
            stack.push(i);
        } else if (string[i] === ')' && stack.length > 0) {
            stack.pop();
        } else if (string[i] === ')' && stack.length === 0) {
            string[i] = '';
        }
    }

    for (let i = 0; i < stack.length; i++) {
        string[stack[i]] = '';
    } 

    return string.join('')
};
