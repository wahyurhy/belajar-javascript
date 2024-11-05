// solusi tanpa recursive

// function generateArray(n) {
//     const result = [];
//     for (let counter = 0; counter <= n; counter += 1) {
//         result.push(counter);
//     }
//     return result;
// }

// console.log(generateArray(5))

function generateArray(n) {
    if (n < 0) {
        return [];
    }

    return [...generateArray(n - 1), n];
}

console.log(generateArray(5));