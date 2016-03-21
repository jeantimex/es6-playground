// Let's import only the getRandom method from utils.js
import { getRandom } from './utils';

// The Car class is the default export of the module
// similar in concept to how many module authors would export a single value
export default class Car {
    // We use destructuring to match properties on the object
    // passed into separate variables for brand, model and horsepower
    constructor({ brand, model, horsepower }) {
        this.brand = brand;
        this.model = model;
        this.horsepower = horsepower;
        this.colors = [];
    }

    // Shorthand method syntax
    drive() {
        return `{this.brand} {this.model} has {this.horsepower} horsepower`;
    }
}
