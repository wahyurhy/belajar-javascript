class SmartPhones {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging() {
        console.log(`Charging ${this.model}`);
    }
}

class iOS extends SmartPhones {
    airDrop() {
        console.log('IOS have a behavior AirDrop');
    }
}

class Android extends SmartPhones {
    splitScreen() {
        console.log('Android have a Split Screen');
    }
}

const ios = new iOS('black', 'A', '12 Pro Max');
const android = new Android('white', 'B', 'Galaxy S21');

console.log(`iOS instance of SmartPhones's class?\t\t(${ios instanceof SmartPhones})`);
console.log(`Android instance of SmartPhones's class?\t(${android instanceof SmartPhones})`);