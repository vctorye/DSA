/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let wordSet = new Set(wordDict);

    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let word of wordSet) {
            let wordLen = word.length
            if (i >= wordLen && s.slice(i-wordLen, i) === word && dp[i - wordLen]) {
                dp[i] = true;
                break
            }
        }
    }

    return dp[s.length]
};