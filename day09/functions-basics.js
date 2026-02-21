console.log("Day 9: JavaScript Functions");

// 1️⃣ Simple function
function greet() {
  console.log("Hello Vivek 👋");
}
greet();


// 2️⃣ Function with parameter
function greetUser(name) {
  console.log("Hello " + name);
}
greetUser("Future MERN Developer");


// 3️⃣ Function with return value
function add(a, b) {
  return a + b;
}

let result = add(10, 5);
console.log("Sum:", result);


// 4️⃣ Arrow function (modern JS)
const multiply = (a, b) => {
  return a * b;
};

console.log("Multiply:", multiply(4, 5));