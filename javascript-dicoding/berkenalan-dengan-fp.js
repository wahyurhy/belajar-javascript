// imperatif
console.log('======== imperatif ========')
const namesImp = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesImpWithExMark = [];

for(let i = 0; i < namesImp.length; i++) {
    newNamesImpWithExMark.push(`${namesImp[i]}!`);
}

console.log(newNamesImpWithExMark);

console.log('======== deklaratif ========')

const namesDek = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesDekWithExcMark = namesDek.map((name) => `${name}!`);

console.log(newNamesDekWithExcMark);