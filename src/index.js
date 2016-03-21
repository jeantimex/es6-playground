// index.js
// Notice that lodash isn't being imported via a relative path
// but all other modules are.
import _ from 'lodash';
import AstonMartin from './aston-martin';

// Taking advantage of new scope controls in ES6
// once a const is assigned, the reference cannot change.
// Of course, transpiling to ES5, this becomes a var, but
// a linter that understands ES6 can warn you if you
// attempt to re-assign a const value, which is useful.
const astonMartin = new AstonMartin();
const cars = [astonMartin];

export default {
    cars
};
