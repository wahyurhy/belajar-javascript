function SmartPhones(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
}

SmartPhones.prototype.charging = function() {
    console.log(`Charging ${this.model}`);
};

function iOS(color, brand, model) {
    SmartPhones.call(this, color, brand, model);
}

iOS.prototype = Object.create(SmartPhones.prototype);
iOS.prototype.constructor = iOS;

iOS.prototype.airDrop = function() {
    console.log('iOS have a behavior AirDrop');
};

function Android(color, brand, model) {
    SmartPhones.call(this, color, brand, model);
}

Android.prototype = Object.create(SmartPhones.prototype);
Android.prototype.constructor = Android;

Android.prototype.splitScreen = function() {
    console.log('Android have a Split Screen');
};

const ios = new iOS('black', 'A', '12 Pro Max');
const android = new Android('white', 'B', 'Galaxy S21');

ios.charging();
ios.airDrop();

android.charging();
android.splitScreen();