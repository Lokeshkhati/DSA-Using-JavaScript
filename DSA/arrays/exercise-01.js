// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
// Pattern : Sliding Window
const arr =  [1, 3, 2, 6, -1, 4, 1, 8, 2]
let K = 5

// brute force BigO(n^2)

// function averageOfSubArrayOfSizeK(arr, K) {
//     let sum = 0
//     let average = [];

//     let length = arr.length - K + 1

//     for (let i = 0; i < length; i++) {
//         for (let j = i; j < i + K; j++) {
//             sum += arr[j]
//         }
//         console.log(`Sum : ${sum}`)

//         average[i] = sum / K
//         sum = 0
//     }
//     return average
// }

// console.log(averageOfSubArrayOfSizeK(arr, K));


// Sliding window Approach


function averageOfSubArrayOfSizeK(arr, K) {
    let sum = 0
    let average = [];
    let start = 0;

    let length = arr.length - K + 1

    for (let end = 0; end < length; end++) {
        sum += arr[end]
        if (end >= K - 1) {
            average[start] = sum / K
            sum -= arr[start]
            start++
        }
    }
    return average
}

console.log(averageOfSubArrayOfSizeK(arr, K));
