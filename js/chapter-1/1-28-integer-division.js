module.exports = function integerDivision(dividend, divisor) {
  if(divisor === 0) throw new Error('Division by 0 is not allowed!');

  var sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  if(dividend < divisor) return 0;
  var quotient = 0;

  while(dividend >= divisor) {
    dividend -= divisor;
    ++quotient;
  }

  return sign * quotient;
};
