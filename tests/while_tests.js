//test powersOfTwo while loop
describe('powersOfTwo', function (){
    it('should be a defined function', function () {
        expect(typeof powersOfTwo()).toBe('function');
    });
    it('should return string', function () {
        expect(typeof powersOfTwo()).toBe("string");
    });
});

//test sellCones while loop
describe('sellCones', function (){
    it('should be a defined function', function () {
        expect(sellCones()).toBeDefined();
    });
    it('should return string', function () {
        expect(typeof sellCones()).toBe("string");
    });
});