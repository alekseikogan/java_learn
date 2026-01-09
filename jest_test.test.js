const add5 = require('./jest_test');

test('adds 5 to the input number', () => {
    expect(add5(3)).toBe(8);
    expect(add5(-2)).toBe(3);
    expect(add5(0)).toBe(5);
});
