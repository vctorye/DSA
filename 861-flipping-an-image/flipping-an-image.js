/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    // this reverses each row 
    image.forEach(row => {
        row.reverse()
    })

    // iterate through reversed matrix to flip each elemnt 
 
    for (let i = 0; i < image.length; i++) { 
        for (let j = 0; j < image[i].length; j++) {
            if (image[i][j] === 1) {
                image[i][j] = 0;
            } else {
                image[i][j] = 1
            }
        }
    } 
    return image  
};