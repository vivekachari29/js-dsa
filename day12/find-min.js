console.log("Day 12: Find Minimum in Array");

let numbers = [10, 5, 25, 8, 30];

// Assume first element is minimum
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log("Minimum number is:", min);