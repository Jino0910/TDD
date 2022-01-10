export default class Money{

    _amount;

    constructor(amount) {
        this._amount = amount;
    }

    isSame(money) {
        return this._amount === money._amount && this.constructor.name === money.constructor.name;
    }


}