// aston-martin.js
import Car from './car';

// Here we use the extends keyword to make
// AstonMartin inherit from LegoCharacter
export default class AstonMartin extends Car {
    constructor() {
        // super lets us call the Car's constructor
        super({ brand: 'Aston Martin' });
        this.colors = [];
    }
}
