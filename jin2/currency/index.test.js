import {Money} from "./index";
import {Dollar} from "./index";
import {Franc} from "./index";

test('money: testEquality', () => {
    expect(new Dollar(5).isSame(new Dollar(5))).toBe(true);
    expect(new Dollar(5).isSame(new Dollar(6))).toBe(false);
    expect(new Franc(5).isSame(new Franc(5))).toBe(true);
    expect(new Franc(5).isSame(new Franc(6))).toBe(false);
    expect(new Franc(5).isSame(new Dollar(5))).toBe(false);
});

test('dollar: testMultiplication', () => {
    const dollarFive = Money.dollar(5);
    expect(new Dollar(10)).toEqual(dollarFive.times(2));
    expect(new Dollar(15)).toEqual(dollarFive.times(3));
});

test('franc: testFrancMultiplication', () => {
    const francFive = new Franc(5);
    expect(new Franc(10)).toEqual(francFive.times(2));
    expect(new Franc(15)).toEqual(francFive.times(3));
});