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

class Android extends SmartPhones {
    // overriding constuctor
    constructor(color, brand, model, device) {
        super(color, brand, model);
        this.device = device;
    }

    charging() {
        super.charging();
        console.log(`Charging ${this.model} with fast charger`);
    }

    splitScreen() {
        console.log('Android have a Split Screen');
    }
}

const android = new Android('white', 'B', 'Galaxy S21', 'smart TV');

console.log(`Produk ${android.device} ini memiliki warna ${android.color} dengan model ${android.model} dari brand ${android.brand}`);
android.charging()