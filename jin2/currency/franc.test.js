import Franc from "./franc";

test('testFrancMultiplication', () => {
    const francFive = new Franc(5);
    expect(new Franc(10)).toEqual(francFive.times(2));
    expect(new Franc(15)).toEqual(francFive.times(3));
});