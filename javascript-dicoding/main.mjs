// import myFunction from './anotherfile.mjs';
// import result from './anotherfile.mjs';
// import { myFunction } from './anotherfile.mjs';
// import { name, email, age } from './anotherfile.mjs';
import * as anotherFile from './anotherfile.mjs';
import { myFunction as userFunction } from './user.mjs';
import { myFunction as customerFunction } from './customer.mjs';
import sayHi, { sayGoodBye } from './anotherfile.mjs'; // ini bukan best practice, tapi bisa dilakukan seperti ini.

// result();
anotherFile.myFunction();

console.log(anotherFile.name);
console.log(anotherFile.email);
console.log(anotherFile.age);

userFunction();
customerFunction();

sayHi(); // Hai, ini defualt export dari anotherfile.mjs
sayGoodBye(); // Bye, ini named export dari anotherfile.mjs