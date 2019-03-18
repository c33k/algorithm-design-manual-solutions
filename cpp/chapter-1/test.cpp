#include <cassert>
#include <exception>
#include "./1-28-integer-division.h"

int main() {
  try {
    integerDivision(5, 0);
    assert(false);
  } catch(std::exception& e) {
    assert(true);  
  }

  assert(integerDivision(10, 5) == 2);
  assert(integerDivision(10, 3) == 3);
  assert(integerDivision(3, 10) == 0);
  assert(integerDivision(0, 10) == 0);
  assert(integerDivision(10, 10) == 1);
  assert(integerDivision(1, 1) == 1);

  //testing negative values
  assert(integerDivision(-4, 2) == -2);
  assert(integerDivision(-4, -4) == 1);
  assert(integerDivision(-4, -2) == 2);
  assert(integerDivision(-2, 4) == 0);  
  assert(integerDivision(0, -44) == 0);

  return 0;
}


