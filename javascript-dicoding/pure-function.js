function addWith(value, addingValue) {
    return value + addingValue
}

const result1 = addWith(0, 1);
console.log(`result1 is ${result1}`);

const result2 = addWith(result1, 1);
console.log(`result2 is ${result2}`);

const result3 = addWith(result2, 1);
console.log(`result3 is ${result3}`);

console.log(result1, result2, result3);