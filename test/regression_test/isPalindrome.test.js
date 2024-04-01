
const { isPalindrome } = require('../../src/isPalindrome'); // Assuming your module is in a file named 'yourModule.js'

describe('isPalindrome', () => {
    it('should return true for palindromic numbers', () => {
        expect(isPalindrome(121)).to.be.true;
        expect(isPalindrome(12321)).to.be.true;
        expect(isPalindrome(1234321)).to.be.true;
    });

    it('should return false for non-palindromic numbers', () => {
        expect(isPalindrome(123)).to.be.false;
        expect(isPalindrome(12345)).to.be.false;
        expect(isPalindrome(123456)).to.be.false;
    });

    it('should return true for single-digit numbers', () => {
        expect(isPalindrome(0)).to.be.true;
        expect(isPalindrome(5)).to.be.true;
        expect(isPalindrome(9)).to.be.true;
    });

    it('should return false for negative numbers', () => {
        expect(isPalindrome(-121)).to.be.false;
        expect(isPalindrome(-12321)).to.be.false;
    });

    it('should return true for negative palindromic numbers', () => {
        expect(isPalindrome(-121)).to.be.false;
        expect(isPalindrome(-12321)).to.be.false;
    });
});
