/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
    const rows = mat.length;
    const cols = mat[0].length;

    const rowSets = mat.map(row => new Set(row));

    for (const num of mat[0]) {
        let inAll = true;
        for (let i = 1; i < rows; i++){
            if (!rowSets[i].has(num)) {
                inAll = false;
                break
            }
        }
        if (inAll) return num
    }
    return -1
};