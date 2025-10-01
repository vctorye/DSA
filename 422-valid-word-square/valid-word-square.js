/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function(words) {
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (j >= words.length || i >= words[j].length || words[i][j] !== words[j][i]){
                return false
            } //checks if its in bounds and if the letter is the same as its opposite 
        }
    }
    return true
};

