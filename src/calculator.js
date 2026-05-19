// calculator.js
// Supported operations: addition (add, +), subtraction (sub, -), multiplication (mul, *), division (div, /)
// Additional operations: modulo (mod, %), power (pow, ^), square root (sqrt)

function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(n);
}

function printUsage() {
  console.log('Usage: node src/calculator.js <operation> <num1> [<num2>]');
  console.log('Operations:');
  console.log('  add | +        : addition');
  console.log('  sub | -        : subtraction');
  console.log('  mul | *        : multiplication');
  console.log('  div | /        : division');
  console.log('  mod | %        : modulo (a mod b)');
  console.log('  pow | ^        : exponentiation (base ^ exponent)');
  console.log('  sqrt           : square root (single operand)');
}

if (require.main === module) {
  const [, , op, aStr, bStr] = process.argv;
  if (!op || !aStr) {
    printUsage();
    process.exit(1);
  }
  const a = Number(aStr);
  const b = bStr !== undefined ? Number(bStr) : undefined;
  if (Number.isNaN(a) || (bStr !== undefined && Number.isNaN(b))) {
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
        result = div(a, b);
        break;
      case 'mod':
      case '%':
        result = modulo(a, b);
        break;
      case 'pow':
      case '^':
        result = power(a, b);
        break;
      case 'sqrt':
        result = squareRoot(a);
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

module.exports = { add, sub, mul, div, modulo, power, squareRoot };