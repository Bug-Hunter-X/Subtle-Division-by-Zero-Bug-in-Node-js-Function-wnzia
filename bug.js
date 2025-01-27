```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This is wrong. It should handle the case where either a or b is 0
  }
  return a / b;
}
```