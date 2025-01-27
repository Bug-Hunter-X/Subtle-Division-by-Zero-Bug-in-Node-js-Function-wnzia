# Subtle Division by Zero Bug in Node.js

This repository demonstrates a common, yet subtle, error in Node.js: improper handling of division by zero. The `myFunction` in `bug.js` incorrectly handles the case where either the numerator or denominator is zero.  The correct solution, found in `bugSolution.js`, demonstrates robust error handling.

## Bug Description

The original `myFunction` attempts to prevent division by zero, but its condition `a === 0 || b === 0` is not sufficient. It returns 0 only when *both* `a` and `b` are 0. If only one is 0, it will still attempt to divide, leading to an error.

## Solution

The corrected `myFunction` in `bugSolution.js` explicitly checks if `b` is 0 before performing the division. If it is, it throws an error, providing a more informative message.