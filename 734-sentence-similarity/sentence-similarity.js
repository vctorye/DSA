/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    // Step 1: Check if lengths are equal
    if (sentence1.length !== sentence2.length) {
        return false;
    }

    // Step 2: Build the similarity map
    const similarityMap = {};

    for (const [wordA, wordB] of similarPairs) {
        // Ensure both words have an entry in the map
        if (!similarityMap[wordA]) {
            similarityMap[wordA] = new Set();
        }
        if (!similarityMap[wordB]) {
            similarityMap[wordB] = new Set();
        }
        // Add the symmetric relationship
        similarityMap[wordA].add(wordB);
        similarityMap[wordB].add(wordA);
    }

    // Step 3: Compare the sentences word by word
    for (let i = 0; i < sentence1.length; i++) {
        const w1 = sentence1[i];
        const w2 = sentence2[i];

        // Words are identical, so they are similar
        if (w1 === w2) {
            continue;
        }

        // Check if w2 is in the set of words similar to w1
        // Also check if similarityMap[w1] exists to avoid errors
        if (!similarityMap[w1] || !similarityMap[w1].has(w2)) {
            return false;
        }
    }

    return true;
};