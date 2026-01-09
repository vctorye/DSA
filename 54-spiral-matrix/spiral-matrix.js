/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const results = [];
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return results;

    let left = 0;
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;

    while (top <= bottom && left <= right) {
        // left -> right
        for (let i = left; i <= right; i++) {
            results.push(matrix[top][i]);
        }
        top++;

        // top -> bottom
        for (let i = top; i <= bottom; i++) {
            results.push(matrix[i][right]);
        }
        right--;

        // right -> left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                results.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // bottom -> top
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                results.push(matrix[i][left]);
            }
            left++;
        }
    }

    return results;
};
