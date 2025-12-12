/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
  function parseComplex(s) {
    const parts = s.split('+');
    const real = parseInt(parts[0]);
    const imag = parseInt(parts[1].slice(0,-1));
    return [real, imag];
  }

  const [a, b] = parseComplex(num1);
  const [c, d] = parseComplex(num2);

  const realPart = a * c - b * d;
  const imagPart = a * d + b *c  
  return `${realPart}+${imagPart}i`;
};