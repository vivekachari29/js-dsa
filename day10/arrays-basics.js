console.log("Day 10: Arrays");

// 1️⃣ Creating an array
let numbers = [10, 20, 30, 40, 50];

console.log("Full array:", numbers);

// 2️⃣ Accessing elements (Index starts at 0)
console.log("First element:", numbers[0]);
console.log("Last element:", numbers[numbers.length - 1]);

// 3️⃣ Loop through array
for (let i = 0; i < numbers.length; i++) {
  console.log("Index:", i, "Value:", numbers[i]);
}

// 4️⃣ Array methods
numbers.push(60);  // Add at end
numbers.pop();     // Remove from end

console.log("After push & pop:", numbers);