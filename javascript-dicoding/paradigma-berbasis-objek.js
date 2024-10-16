function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.eat = function() {
    console.log(`${this.name} is eating`);
}

const person1 = new Person('Wahyu', 25);

person1.eat();