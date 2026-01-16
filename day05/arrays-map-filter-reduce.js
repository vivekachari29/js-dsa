console.log("Day 5 JS Started 🚀");

// 1️⃣ Arrays basics
let numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers);

// 2️⃣ map → transform array
let doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled);

// 3️⃣ filter → select elements
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// 4️⃣ reduce → combine array values
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

// 5️⃣ DSA: find max number
let max = numbers.reduce((a, b) => (a > b ? a : b));
console.log("Max number:", max);

// 6️⃣ DSA: count even numbers
let evenCount = numbers.filter((num) => num % 2 === 0).length;
console.log("Even count:", evenCount);
