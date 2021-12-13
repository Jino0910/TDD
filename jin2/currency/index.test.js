const Dollar = require('./doller');

test('testMultiplication', () => {
    const dollarFive = new Dollar(5);
    dollarFive.times(2);
    expect(10).toEqual(dollarFive.amount);
});