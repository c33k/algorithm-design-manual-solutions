const assert = require('assert');
const integerDivision = require('./1-28-integer-division');

let plan = 1;

(function testIntegerDivision() {
  --plan;

  assert.equal(integerDivision(10, 5), 2, 'exact division')
  assert.equal(integerDivision(10, 3), 3, 'non-exact division')
  assert.equal(integerDivision(3, 10), 0, '3 / 10 = 0')
  assert.equal(integerDivision(0, 10), 0, 'zero divided by N is always zero')
  assert.equal(integerDivision(10, 10), 1, 'division by itself')
  assert.equal(integerDivision(1, 1), 1)

  //testing negative values
  assert.equal(integerDivision(-4, 2), -2, '-4 / 2 = -2')
  assert.equal(integerDivision(-4, -4), 1, '-4 / -4 = 1')
  assert.equal(integerDivision(-4, -2), 2, '-4 / -2 = 2')
  assert.equal(integerDivision(-2, 4), 0, '-2 / 4 = 0')
  assert.equal(integerDivision(0, -44), 0, '0 / -4 = -0')

  const err = new Error('Division by 0 is not allowed!');
  assert.throws(() => integerDivision(1, 0), err)
})();

assert.equal(plan, 0)
