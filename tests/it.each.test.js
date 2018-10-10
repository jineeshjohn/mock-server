const add = (a, b) => a + b;
describe('test add method', () => {
    it.each`
      a     | b     | result
      ${2}  | ${3}  | ${5}
      ${20} | ${30} | ${50}
      ${-2} | ${-3} | ${-5}
    `('should return $result when $a and $b are used', ({ a, b, result }) => {
            expect(add(a, b)).toEqual(result);
        });

    const cases = [
        [1, 1, 2], 
        [1, 2, 3], 
        [2, 1, 3]
    ];
    it.each(cases)('adding %d to %d returns %d', (a, b, expected) => {
        expect(a + b).toBe(expected);
    });

});