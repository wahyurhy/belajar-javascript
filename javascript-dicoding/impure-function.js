let value = 0;

function addWith(addingValue) {
    value += addingValue;
    console.log(`Current value is ${value}`);
    return value;
}

const result1 = addWith(1);
const result2 = addWith(1);
const result3 = addWith(1);

console.log(result1, result2, result3);