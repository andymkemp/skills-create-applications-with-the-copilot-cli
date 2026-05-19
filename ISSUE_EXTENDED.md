## Feature Description

Add modulo, exponentiation (power), and square root operations to the calculator implemented in src/calculator.js.

- Modulo (`mod`): returns remainder of division (a mod b)
- Exponentiation (`pow` or `^`): raise a to power b
- Square root (`sqrt`): returns square root of a (single operand)

## Use Case

Scripts and users need modulo, power, and sqrt for common math tasks (remainder checks, exponent calculations, roots) without external tools or libraries.

## Proposed Solution

Extend src/calculator.js to add functions and CLI verbs:
- mod a b
- pow a b
- sqrt a

Validate inputs (numeric, division/mod by zero, negative sqrt handling). Update CLI usage, add unit tests for new ops.

## Additional Context

Keep implementation in vanilla Node.js. Add tests in src/tests, update README with examples:
calculator.js mod 10 3
calculator.js pow 2 8
calculator.js sqrt 9
