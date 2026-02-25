function reverseArray(arr) {
    let reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return reversed;
}

// Test
let numbers = [1, 2, 3, 4];
console.log(reverseArray(numbers));