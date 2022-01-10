import Dollar from "./dollar";
import Money from "./money";

test('testMultiplication', () => {
    const dollarFive = Money.dollar(5);
    expect(new Dollar(10)).toEqual(dollarFive.times(2));
    expect(new Dollar(15)).toEqual(dollarFive.times(3));
});