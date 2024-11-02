class Smartphones {
    constructor(color, brand, model) {
        this.color = color
        this.brand = brand
        this.model = model
    }

    charging() {
        console.log(`Charging ${this.model}`);
    }
}

class IOS extends Smartphones {
    airDrop() {
        console.log('iOS have a behavior AirDrop');
    }
}

class Android extends Smartphones {
    splitScreen() {
        console.log('Android have a Split Screen');
    }
}

const ios = new IOS('black', 'A', '12 Pro Max');
const android = new Android('white', 'B', 'Galaxy S21');

ios.charging(); 
ios.airDrop(); 

android.charging(); 
android.splitScreen(); 