/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    
    // Start from day 1 (index 1)
    for (let i = 1; i < prices.length; i++) {
        // If today's price is higher than yesterday's, 
        // we can capture that profit
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    
    return maxProfit;
};