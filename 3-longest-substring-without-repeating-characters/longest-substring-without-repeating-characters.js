/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0; // Initialize longest to store the maximum length of unique substring found
    
    // Outer loop to iterate over each character in the string `s`
    for (let i = 0; i < s.length; i++) {
        let current = s[i]; // Start a new substring with the current character
        
        // Inner loop to expand the substring starting from `i`
        for (let j = i + 1; j < s.length; j++) {
            // Check if the current character `s[j]` is already in the substring
            if (!current.includes(s[j])) {
                // If not, add `s[j]` to the current substring
                current += s[j];
            } else {
                // If a duplicate character is found, update `longest` with the maximum length so far
                longest = Math.max(current.length, longest);
                break; // Stop expanding this substring as it is no longer unique
            }
        }
        
        // Update `longest` in case the current substring reaches the end without duplicates
        longest = Math.max(current.length, longest);
    }
    
    return longest; // Return the length of the longest substring without repeating characters
};