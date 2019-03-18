#include "./1-28-integer-division.h"

DivisionByZeroException DividedByZero;

const char* DivisionByZeroException::what() const throw()
{
  return "Division by 0 (zero) is not allowed!";
} 

int integerDivision(int dividend, int divisor) {
  if(divisor == 0) throw DividedByZero;
  
  short int sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
  dividend = std::abs(dividend);
  divisor = std::abs(divisor);

  if(dividend < divisor) return 0;
  int quotient = 0;

  while(dividend >= divisor) {
    dividend -= divisor;
    ++quotient;
  }

  return sign * quotient;
}
