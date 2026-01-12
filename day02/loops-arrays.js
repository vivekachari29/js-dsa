console.log("Day 2 Started");

// For Loop
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// While Loop
let j = 1;
while (j <= 3) {
  console.log("While Loop:", j);
  j++;
}

// Arrays
let numbers = [10, 20, 30, 40];
console.log("Array:", numbers);

// Loop through array
for (let i = 0; i < numbers.length; i++) {
  console.log("Array element:", numbers[i]);
}

// Sum of array (basic DSA)
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum of array:", sum);
