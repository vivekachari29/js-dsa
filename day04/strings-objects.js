console.log("Day 4 JS Started 🚀");

// 1️⃣ Strings
let str = "JavaScript";

console.log("Length:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Substring:", str.substring(0, 4));

// 2️⃣ Reverse a string (DSA)
function reverseString(s) {
  let reversed = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i];
  }
  return reversed;
}

console.log("Reversed string:", reverseString("hello"));

// 3️⃣ Palindrome check (DSA)
function isPalindrome(s) {
  let reversed = reverseString(s);
  return s === reversed;
}

console.log("Is palindrome (madam):", isPalindrome("madam"));
console.log("Is palindrome (hello):", isPalindrome("hello"));

// 4️⃣ Objects
let user = {
  name: "Vivek",
  age: 22,
  role: "MERN Developer",
};

console.log("User name:", user.name);
console.log("User role:", user.role);

// 5️⃣ Loop through object
for (let key in user) {
  console.log(key + ":", user[key]);
}

