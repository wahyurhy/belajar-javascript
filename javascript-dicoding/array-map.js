const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = newArray.map((name) => `${name}!`);

console.log(newArray);
console.log(arrayMap);
console.log(arrayMap.sort((a, b) => b.localeCompare(a)));
console.log(newArray);
console.log(arrayMap);