/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort();
    const result = [];
    let prefix = '';

    for (const char of searchWord) {
        prefix += char;
        const suggestions = [];
        for (const product of products) {
            if (product.startsWith(prefix)) {
                suggestions.push(product);
                if (suggestions.length === 3) break
            }
        }
        result.push(suggestions);
    }

    return result;
};