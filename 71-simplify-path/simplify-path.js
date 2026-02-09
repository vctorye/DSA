/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let array = path.split('/');
    let stack = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "." || array[i] === "") {
            continue;
        } else if (array[i] === '..') {
            stack.pop(); 
        } else{
            stack.push(array[i])
        }
    }

    return '/' + stack.join('/');
};


