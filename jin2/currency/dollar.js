import Money from "./money"

export default class Dollar extends Money {

    constructor(_amount) {
        super(_amount);
    }

    times(multiplier) {
        return new Dollar(this._amount * multiplier);
    }
}