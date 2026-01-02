/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    let parts = path.split('/')
    console.log(parts)
    for (let part of parts) {
        if (part === '' || part === '.') {
            continue;
        } else if (part === '..') {
            stack.pop();
        } else {
            stack.push(part);
        }
    }

    return '/' + stack.join('/')
};


