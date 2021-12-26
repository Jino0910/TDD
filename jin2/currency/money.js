class Money {

    _amount;

    constructor(amount) {
        this._amount = amount;
    }

    isSame(money) {
        return this._amount === money._amount;
    }
}

module.exports = Money;