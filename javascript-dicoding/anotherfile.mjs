// export default function myFunction() {
//     console.log('Ini adalah function export default.');
// }

export function myFunction() {
    console.log('Ini adalah function export default.');
}

export default function sayHi() {
    console.log('Hai, in default export dari anotherfile.mjs');
}

export function sayGoodBye() {
    console.log('Bye, ini named export dar anotherfile.mjs');
}

const name = 'Wahyu';
const email = 'wahyu@mail.com';
const age = 23;

export { name, email, age };