
const { add, subtract, multiply, divide } = require("../../src/basic"); // Assuming your module is in a file named 'yourModule.js'

describe('Math functions', () => {
    describe('add', () => {
        it('should correctly add two numbers', () => {
            expect(add(2, 3)).to.equal(5);
            expect(add(-2, 3)).to.equal(1);
            expect(add(0, 0)).to.equal(0);
        });
    });

    describe('subtract', () => {
        it('should correctly subtract two numbers', () => {
            expect(subtract(5, 3)).to.equal(2);
            expect(subtract(3, -2)).to.equal(5);
            expect(subtract(0, 0)).to.equal(0);
        });
    });

    describe('multiply', () => {
        it('should correctly multiply two numbers', () => {
            expect(multiply(2, 3)).to.equal(6);
            expect(multiply(-2, 3)).to.equal(-6);
            expect(multiply(0, 5)).to.equal(0);
        });
    });

    describe('divide', () => {
        it('should correctly divide two numbers', () => {
            expect(divide(6, 3)).to.equal(2);
            expect(divide(-6, 3)).to.equal(-2);
            expect(divide(0, 5)).to.equal(0);
        });

        it('should throw an error when dividing by zero', () => {
            expect(() => { divide(6, 0) }).to.throw('Division by zero');
        });
    });
});
