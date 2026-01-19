console.log("Day 8 JS Started 🚀");

// 1️⃣ Synchronous example
console.log("Start");
console.log("Middle");
console.log("End");

// 2️⃣ Asynchronous: setTimeout
console.log("Before setTimeout");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("After setTimeout");

// 3️⃣ setInterval
let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Interval count:", count);

  if (count === 3) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 1000);
