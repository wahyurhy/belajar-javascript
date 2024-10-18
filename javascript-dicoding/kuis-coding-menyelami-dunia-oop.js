class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

class Rabbit extends Animal {
    constructor(name, age) {
        super(name, age, true);
    }

    eat() {
        return `${this.name} sedang makan!`;
    }
}

class Eagle extends Animal {
    constructor(name, age) {
        super(name, age, false);
    }

    fly() {
        return `${this.name} sedang terbang!`;
    }
}

const myRabbit = new Rabbit('Labi', 2);
console.log(myRabbit.eat());

const myEagle = new Eagle('Elo', 4)
console.log(myEagle.fly());

console.log(myRabbit.name) // Labi
console.log(myRabbit.age) // 2
console.log(myRabbit.isMammal) // true
console.log(myEagle.name) // Elo
console.log(myEagle.age) // 4
console.log(myEagle.isMammal) // false