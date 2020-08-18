describe('queryUser', function (){
    it('should be a defined function', function () {
        expect(queryUser()).toBeDefined();
    });
    it('should return undefined', function () {
        expect(queryUser()).toBeDefined(undefined);
    });
});