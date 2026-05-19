const { expect } = require('chai');
const { add, sub, mul, div, modulo, power, squareRoot } = require('../calculator');

describe('calculator basic operations', () => {
  it('addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('subtraction: 10 - 4 = 6', () => {
    expect(sub(10, 4)).to.equal(6);
  });

  it('multiplication: 45 * 2 = 90', () => {
    expect(mul(45, 2)).to.equal(90);
  });

  it('division: 20 / 5 = 4', () => {
    expect(div(20, 5)).to.equal(4);
  });

  it('division by zero throws', () => {
    expect(() => div(1, 0)).to.throw('Division by zero');
  });

  it('operations with floats', () => {
    expect(add(1.2, 2.3)).to.be.closeTo(3.5, 1e-9);
    expect(div(5, 2)).to.be.closeTo(2.5, 1e-9);
  });

  it('negative numbers', () => {
    expect(sub(-5, -3)).to.equal(-2);
    expect(mul(-4, 5)).to.equal(-20);
  });

  it('large numbers', () => {
    expect(add(1e12, 1)).to.equal(1000000000001);
  });
});

describe('calculator extended operations', () => {
  it('modulo: 5 % 2 = 1', () => {
    expect(modulo(5, 2)).to.equal(1);
  });

  it('modulo by zero throws', () => {
    expect(() => modulo(5, 0)).to.throw('Modulo by zero');
  });

  it('power: 2 ^ 3 = 8', () => {
    expect(power(2, 3)).to.equal(8);
  });

  it('power with negative exponent: 2 ^ -1 = 0.5', () => {
    expect(power(2, -1)).to.be.closeTo(0.5, 1e-12);
  });

  it('squareRoot: sqrt(16) = 4', () => {
    expect(squareRoot(16)).to.equal(4);
  });

  it('squareRoot of non-perfect square', () => {
    expect(squareRoot(2)).to.be.closeTo(Math.sqrt(2), 1e-12);
  });

  it('squareRoot of negative number throws', () => {
    expect(() => squareRoot(-9)).to.throw('Square root of negative number');
  });
});