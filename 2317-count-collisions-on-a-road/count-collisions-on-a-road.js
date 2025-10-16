/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    let collisions = 0;


   // Ignore leading 'L' (no collisions possible)
   let i = 0;
   while (i < directions.length && directions[i] === 'L') {
       i++;
   }


   // Ignore trailing 'R' (no collisions possible)
   let j = directions.length - 1;
   while (j >= 0 && directions[j] === 'R') {
       j--;
   }


   // Count all remaining cars as they will collide
   for (let k = i; k <= j; k++) {
       if (directions[k] !== 'S') {
           collisions++;
       }
   }


   return collisions;

};