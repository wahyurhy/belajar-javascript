// import { name, favoriteFood } from './module.mjs';

// console.log(`Nama: ${name}`);
// console.log(`Makanan kesukaan: ${favoriteFood}`);

// import { name, favoriteFood as food, sayHi } from './module.mjs';

// console.log(`Nama: ${name}`);
// console.log(`Makanan kesukaan: ${food}`);
// sayHi(name);

import * as module from './module.js';

console.log(`Nama: ${module.name}`);
console.log(`Makanan kesukaan: ${module.favoriteFood}`);
module.sayHi(module.name);