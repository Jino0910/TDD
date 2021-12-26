const Money = require('./money');

class Franc extends Money {

    constructor(_amount) {
        super(_amount);
    }

    times(multiplier) {
        return new Franc(this._amount * multiplier);
    }
}

module.exports = Franc;
