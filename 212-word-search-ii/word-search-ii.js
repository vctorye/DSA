/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const result = new Set();

    // 1. Build Trie from the word list
    const trie = {};
    for (let word of words) {
        let node = trie;
        for (let char of word) {
            if (!node[char]) node[char] = {};
            node = node[char];
        }
        node.word = word; // mark the end of a word
    }

    const rows = board.length;
    const cols = board[0].length;

    // 2. DFS function to explore board
    const dfs = (r, c, node) => {
        const char = board[r][c];
        if (!node[char]) return;

        const nextNode = node[char];
        if (nextNode.word) {
            result.add(nextNode.word);
            delete nextNode.word; // to prevent duplicates
        }

        board[r][c] = '#'; // mark visited

        for (let [dr, dc] of [[1,0], [-1,0], [0,1], [0,-1]]) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc] !== '#') {
                dfs(nr, nc, nextNode);
            }
        }

        board[r][c] = char; // unmark
    };

    // 3. Try DFS from each cell on the board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, trie);
        }
    }

    return [...result];
};
