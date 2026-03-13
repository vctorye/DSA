/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
if (mat.length === 0 || mat[0].length === 0) return [];


    /// initiate our varaibles
    const m = mat.length;
    const n = mat[0].length;
    let up = true;
    let r = 0, c  = 0;
    let result = [];


    // iterate through matrix
    for (let i = 0; i < m * n; i++) {
        result.push(mat[r][c])


        if (up) {
            if (c === n - 1) { // this will check if its current at the end of the row
                r++;
                up = false
            } else if (r === 0) { // this checks if we are at the top if so go down
                c++;
                up = false;
            } else { // this mjust means we're going up
                r--;
                c++;
            }
        } else {
            if (r === m - 1) {
                c++;
                up = true;
            } else if (c === 0) {
                r++;
                up = true;
            } else {
                r++;
                c--;
            }
        }
    }
    return result;



};