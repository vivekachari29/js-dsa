function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

let numbers = [10, 20, 30, 40];

console.log("Sum:", sumArray(numbers));


function averageArray(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

console.log("Average:", averageArray(numbers));


function countEvenOdd(arr) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    return { even, odd };
}

console.log("Even & Odd Count:", countEvenOdd(numbers));

