/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // Sort the array of strings lexicographically
    strs.sort();

    // Get the first and last strings in the sorted array
    let a = strs[0];
    let b = strs[strs.length - 1];

    // Initialize an empty string to store the common prefix
    let c = '';

    // Iterate through the characters of the first string (a)
    for(let i = 0; i < a.length; i++) {
        // Compare characters of the first and last string
        if(a[i] == b[i]) {
            // If characters match, add to the common prefix
            c += a[i];
        } else {
            // Stop when characters no longer match
            break;
        }
    }

    // Return the longest common prefix found
    return c;
};
