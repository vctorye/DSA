/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // split the string by /
    let parts = path.split('/')
    let stack = []
    //itereate through the array
    for (let part of parts) {
        if (part === '' || part === '.' ) {
            continue;
        } else if (part === '..') {
            stack.pop();
        } else {
            stack.push(part)
        }
    }
        return '/' + stack.join('/');

};


