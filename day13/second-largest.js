function secondLargest(arr) {
    if (arr.length < 2) {
        return "Array must have at least 2 elements";
    }

    let largest = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            second = largest;
            largest = arr[i];
        } else if (arr[i] > second && arr[i] !== largest) {
            second = arr[i];
        }
    }

    return second;
}

// Test
let numbers = [10, 5, 8, 20];
console.log(secondLargest(numbers));