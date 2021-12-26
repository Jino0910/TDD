const Money = require('./money');

class Dollar extends Money {

    constructor(_amount) {
        super(_amount);
    }

    times(multiplier) {
        return new Dollar(this._amount * multiplier);
    }

    isSame(obj) {
        return this._amount === obj._amount;
    }
}

module.exports = Dollar;
