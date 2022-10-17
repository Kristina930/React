const mapArrToStrings = require('./mapArrToStrings');

describe( 'mapArrToStrings', () => {
    test('Коректное значение', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
    })
    test('Мешанина', () => {
        expect(mapArrToStrings([1, 2, 3, null, undefined, '3'])).toEqual(['1', '2', '3'])
    })
    test('Пустой массив', () => {
        expect(mapArrToStrings([])).toEqual([])
    })
  
})