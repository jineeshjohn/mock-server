
describe('abc describe',  () => {
    const arr = [[1, 1, 2], [1, 2, 3], [2, 1, 3]];

    describe("SOme crap", () => {
        it.each(arr)('.add(%i, %i)', (a) => {
                expect(true).toBe(true);
            },
        );
    });
})