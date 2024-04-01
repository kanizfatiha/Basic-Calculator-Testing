const { add, subtract, multiply, divide } = require('../../src/basic'); // Assuming your module is in a file named 'arithmetic.js'

describe('Integration tests for arithmetic functions', () => {
    it('should perform addition, subtraction, multiplication, and division correctly', () => {
        // Test addition and subtraction
        expect(add(5, 3)).to.equal(8);
        expect(subtract(5, 3)).to.equal(2);

        // Test multiplication and division
        expect(multiply(5, 3)).to.equal(15);
        expect(divide(15, 3)).to.equal(5);
    });

    it('should handle complex arithmetic operations correctly', () => {
        // Test a combination of arithmetic operations
        expect(add(5, multiply(3, 2))).to.equal(11);
        expect(divide(subtract(10, 2), 2)).to.equal(4);
    });

    it('should handle edge cases and special scenarios', () => {
        // Test division by zero
        expect(() => { divide(5, 0) }).to.throw('Division by zero');
        
        // Test negative numbers
        expect(add(-5, 3)).to.equal(-2);
        expect(multiply(-5, 3)).to.equal(-15);
    });
});
