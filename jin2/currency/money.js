export default class Money{

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