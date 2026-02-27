// Day 15 - Find Duplicate in Array
// Concepts: Nested Loops, Hashing, Object, Set
// Time Complexity Comparison Included

// ---------------------------------------------------
// 1️⃣ Brute Force Approach - O(n^2)
// ---------------------------------------------------

function findDuplicateBrute(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return "No duplicate found";
}

// ---------------------------------------------------
// 2️⃣ Optimized Approach Using Object - O(n)
// ---------------------------------------------------

function findDuplicateObject(arr) {
    let seen = {};

    for (let i = 0; i < arr.length; i++) {
        // Check key existence (not value)
        if (arr[i] in seen) {
            return arr[i];
        }
        seen[arr[i]] = true;
    }

    return "No duplicate found";
}

// ---------------------------------------------------
// 3️⃣ Optimized Approach Using Set - O(n)
// ---------------------------------------------------

function findDuplicateSet(arr) {
    let seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            return arr[i];
        }
        seen.add(arr[i]);
    }

    return "No duplicate found";
}

// ---------------------------------------------------
// Test Cases
// ---------------------------------------------------

let numbers1 = [1, 3, 4, 2, 2];
let numbers2 = [5, 1, 2, 3, 4];

console.log("Brute Force:", findDuplicateBrute(numbers1));
console.log("Object Method:", findDuplicateObject(numbers1));
console.log("Set Method:", findDuplicateSet(numbers1));

console.log("Brute Force (No Duplicate):", findDuplicateBrute(numbers2));
console.log("Object Method (No Duplicate):", findDuplicateObject(numbers2));
console.log("Set Method (No Duplicate):", findDuplicateSet(numbers2));