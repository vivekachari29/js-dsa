console.log("Day 11: Find Maximum in Array");

let numbers = [10, 5, 25, 8, 30];

// Assume first element is max
let max = numbers[0];

// Loop through array
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("Maximum number is:", max);
