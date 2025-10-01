/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    // use stack 
    let array = s.split('');
    let stack = [];

    //iterate through array 
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '(') {
           stack.push(i); 
        } else if (array[i] === ')' && stack.length === 0) {
            array[i] = '';
        } else  if (array[i] === ")" && stack.length)  {
            stack.pop()
        }
    }

    for (let i = 0; i < stack.length; i++) {
        array[stack[i]] = ''
    }
    return array.join('')
};
