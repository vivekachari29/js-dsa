console.log("Day 6 JS Started 🚀");

// 1️⃣ Object basics
const user = {
  name: "Vivek",
  age: 22,
  role: "MERN Developer",
  skills: ["JavaScript", "React", "Node.js"],
};

console.log("User:", user);

// 2️⃣ Object destructuring
const { name, age, role } = user;
console.log("Name:", name);
console.log("Age:", age);
console.log("Role:", role);

// 3️⃣ Spread operator (object)
const updatedUser = {
  ...user,
  experience: "Fresher",
};

console.log("Updated User:", updatedUser);

// 4️⃣ Spread operator (array)
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log("New Numbers:", newNumbers);

// 5️⃣ DSA: Count properties in object
function countProperties(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count;
}

console.log("Total properties:", countProperties(user));

// 6️⃣ DSA: Check property exists
function hasProperty(obj, prop) {
  return prop in obj;
}

console.log("Has skill property:", hasProperty(user, "skills"));
console.log("Has salary property:", hasProperty(user, "salary"));
console.log("Day 6 JS Ended ✅");