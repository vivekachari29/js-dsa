console.log("Day 3 JS Started 🚀");

// 1️⃣ Function basics
function greet(name) {
  return "Hello " + name;
}

console.log(greet("Vivek"));

// 2️⃣ Function to add two numbers
function add(a, b) {
  return a + b;
}

console.log("Addition:", add(10, 20));

// 3️⃣ DSA: Sum of array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log("Sum of array:", sumArray([1, 2, 3, 4]));

// 4️⃣ DSA: Find maximum number
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log("Max number:", findMax([10, 5, 20, 8]));

// 5️⃣ DSA: Reverse array
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log("Reversed array:", reverseArray([1, 2, 3, 4]));
