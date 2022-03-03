export class Money{

    _amount;

    constructor(amount) {
        this._amount = amount;
    }

    isSame(money) {
        return this._amount === money._amount && this.constructor.name === money.constructor.name;
    }

    static dollar(amount) {
        return new Dollar(amount);
    }

    // abstract
    times() {
        throw new Error('You have to implement the method times!');
    }
}

export class Dollar extends Money {

    constructor(_amount) {
        super(_amount);
    }

    times(multiplier) {
        return new Dollar(this._amount * multiplier);
    }
}

export class Franc extends Money {

    constructor(_amount) {
        super(_amount);
    }

    times(multiplier) {
        return new Franc(this._amount * multiplier);
    }
}