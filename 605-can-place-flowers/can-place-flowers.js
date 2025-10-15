/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;


   for (let i = 0; i < flowerbed.length; i++) {
       if (
           flowerbed[i] === 0 && // Current spot is empty
           (i === 0 || flowerbed[i - 1] === 0) && // Left neighbor is empty or out of bounds
           (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) // Right neighbor is empty or out of bounds
       ) {
           flowerbed[i] = 1; // Plant a flower here
           count++; // Increment the number of flowers planted
           i++; // Skip the next position as it's adjacent
       }


       if (count >= n) return true; // Stop early if enough flowers are planted
   }


   return count >= n; // Check if we planted enough flowers


};