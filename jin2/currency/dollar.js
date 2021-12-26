class Dollar {

    #amount;

    constructor(amount) {
        this.#amount = amount;
    }

    times(multiplier) {
        return new Dollar(this.#amount * multiplier);
    }

    isSame(obj) {
        return this.#amount === obj.#amount;
    }
}
    ``
module.exports = Dollar;
