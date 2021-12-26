const Dollar = require('./dollor');

test('testMultiplication', () => {
    const dollarFive = new Dollar(5);
    let product = dollarFive.times(2);
    expect(10).toEqual(product.amount);
    product = dollarFive.times(3);
    expect(15).toEqual(product.amount);
});

test('testEquality', () => {
    expect(new Dollar(5).isSame(new Dollar(5))).toBe(true);
    expect(new Dollar(5).isSame(new Dollar(6))).toBe(false);
});