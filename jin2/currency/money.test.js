import Dollar from "./dollar";
import Franc from "./franc";

test('testEquality', () => {
    expect(new Dollar(5).isSame(new Dollar(5))).toBe(true);
    expect(new Dollar(5).isSame(new Dollar(6))).toBe(false);
    expect(new Franc(5).isSame(new Franc(5))).toBe(true);
    expect(new Franc(5).isSame(new Franc(6))).toBe(false);
    expect(new Franc(5).isSame(new Dollar(5))).toBe(false);
});