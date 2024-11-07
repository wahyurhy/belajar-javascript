function registerEmail(person, email) {
    // return Object.assign(person, { email });
    return { ...person, email };
}

const person = {
    name: 'Wahyu',
    username: 'wahyurhy'
};

const personWithEmail = registerEmail(person, 'wahyurhy@gmail.com');

console.log(person);
console.log(personWithEmail);