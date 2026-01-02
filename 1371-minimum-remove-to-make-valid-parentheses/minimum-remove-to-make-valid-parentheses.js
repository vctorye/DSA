/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = [];
    let array = s.split('');

    for (let i = 0; i < array.length; i++) {
        if (array[i] === '(') {
            stack.push(i);
        } else if (array[i] === ')' && stack.length === 0) {
            array[i] = "";
        }   else if (array[i] === ")" && stack.length)   {
            stack.pop()
        }
    }

    for (let i = 0; i < stack.length; i++) {
        array[stack[i]] = "";
    }

    return array.join('')
};
