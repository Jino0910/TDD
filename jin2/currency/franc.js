import Money from "./money";

export default class Franc extends Money {

    constructor(_amount) {
        super(_amount);
    }

    times(multiplier) {
        return new Franc(this._amount * multiplier);
    }
}