class Franc {

    #amount;

    constructor(amount) {
        this.#amount = amount;
    }

    times(multiplier) {
        return new Franc(this.#amount * multiplier);
    }

    isSame(obj) {
        return this.#amount === obj.#amount;
    }
}

module.exports = Franc;
