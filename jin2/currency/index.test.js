const sum = require('./index');

test('testMultiplication', () => {
    const dollarFive = new Dollar(5);
    dollarFive.times(2);
    expect(10).toEqual(dollarFive.amount);
});