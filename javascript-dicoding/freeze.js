const user = {
    name: 'John',
    email: 'john@mail.com',
}

Object.freeze(user);

try {
    user.email = 'wahyu@mail.com';
} catch (error) {
    console.log(`Apaan nih ngubah2 aee!! [${error}]`);
}

console.log(user);