console.log("Day 7 JS Started 🚀");

// 1️⃣ Normal function
function add(a, b) {
  return a + b;
}
console.log("Add:", add(5, 3));

// 2️⃣ Function expression
const subtract = function (a, b) {
  return a - b;
};
console.log("Subtract:", subtract(10, 4));

// 3️⃣ Arrow function
const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(4, 5));

// 4️⃣ Callback function
function calculate(a, b, operation) {
  return operation(a, b);
}

console.log("Using callback (add):", calculate(3, 4, add));
console.log("Using callback (multiply):", calculate(3, 4, multiply));

// 5️⃣ DSA: Square numbers using callback
function square(num) {
  return num * num;
}

function mapArray(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

console.log("Squares:", mapArray([1, 2, 3, 4], square));
console.log("Day 7 JS Ended ✅");