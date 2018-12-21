if (0n) {
  console.log('Hello from the if!');
} else {
  console.log('Hello from the else!');
}

// "Hello from the else!"

0n || 12n
// 12n

0n && 12n
// 0n

Boolean(0n)
// false

Boolean(12n)
// true

!12n
// false

!0n
// true