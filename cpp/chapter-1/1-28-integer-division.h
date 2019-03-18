#include <exception>

class DivisionByZeroException : public std::exception 
{
  virtual const char* what() const throw();
};

int integerDivision(int dividend, int divisor);
