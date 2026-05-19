## Feature Description

Implement a simple Node.js CLI calculator that supports basic arithmetic operations:
- Addition
- Subtraction
- Multiplication
- Division

The calculator should be implemented in calculator.js and expose a clear CLI interface for passing operands and an operator.

## Use Case

Users need a small command-line utility to perform quick arithmetic from scripts or the terminal without opening a REPL or spreadsheet.

## Proposed Solution

Add a new file calculator.js implementing functions for add, subtract, multiply, and divide. The CLI should accept arguments like:

calculator.js add 2 3
calculator.js sub 5 2
calculator.js mul 4 6
calculator.js div 10 2

Include input validation (numeric operands, division-by-zero handling) and exit codes.

## Additional Context

Keep dependencies minimal (vanilla Node.js). Add unit tests for each operation and example usage in README.
