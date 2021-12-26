const Franc = require('./franc');

test('testFrancMultiplication', () => {
    const francFive = new Franc(5);
    let product = francFive.times(2);
    expect(new Franc(10)).toEqual(product);
    product = francFive.times(3);
    expect(new Franc(15)).toEqual(product);
});