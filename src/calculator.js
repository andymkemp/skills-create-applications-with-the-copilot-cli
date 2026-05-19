#!/usr/bin/env node
// calculator.js
// Supported operations: addition (add, +), subtraction (sub, -), multiplication (mul, *), division (div, /)

function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function printUsage() {
  console.log('Usage: node src/calculator.js <operation> <num1> <num2>');
  console.log('Operations:');
  console.log('  add | +    : addition');
  console.log('  sub | -    : subtraction');
  console.log('  mul | *    : multiplication');
  console.log('  div | /    : division');
}

if (require.main === module) {
  const [, , op, aStr, bStr] = process.argv;
  if (!op || !aStr || !bStr) {
    printUsage();
    process.exit(1);
  }
  const a = Number(aStr);
  const b = Number(bStr);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Operands must be numbers.');
    process.exit(2);
  }
  try {
    let result;
    switch (op) {
      case 'add':
      case '+':
        result = add(a, b);
        break;
      case 'sub':
      case '-':
        result = sub(a, b);
        break;
      case 'mul':
      case '*':
        result = mul(a, b);
        break;
      case 'div':
      case '/':
        if (b === 0) {
          console.error('Error: Division by zero');
          process.exit(3);
        }
        result = div(a, b);
        break;
      default:
        console.error(`Unknown operation: ${op}`);
        printUsage();
        process.exit(4);
    }
    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(5);
  }
}

module.exports = { add, sub, mul, div };
