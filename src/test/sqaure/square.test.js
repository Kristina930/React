const square = require('./square');

describe( 'square', () => {
    test('Коректное значение', () => {
        expect(square(2)).toBe(4)
        expect(square(2)).toBeLessThan(5)
        expect(square(2)).toBeGreaterThan(3)
    })
    test('Вызвать 0 раз', () => {
        const MathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(MathPow).toBeCalledTimes(0)
    })
    test('Вызвать 1 раз', () => {
        const MathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(MathPow).toBeCalledTimes(1)
    })
})