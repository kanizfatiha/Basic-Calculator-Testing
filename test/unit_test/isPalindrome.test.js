const { isPalindrome } = require('../../src/isPalindrome');

describe('isPalindrome function', () => {
  it('should return true for palindrome numbers', () => {
    // Palindrome numbers
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindrome(1221)).toBe(true);
    expect(isPalindrome(12321)).toBe(true);
    expect(isPalindrome(123321)).toBe(true);
  });

  it('should return false for non-palindrome numbers', () => {
    // Non-palindrome numbers
    expect(isPalindrome(123)).toBe(false);
    expect(isPalindrome(1234)).toBe(false);
    expect(isPalindrome(12345)).toBe(false);
    expect(isPalindrome(123456)).toBe(false);
  });

//   it('should return true for single-digit numbers', () => {
//     // Single-digit numbers are palindromes
//     expect(isPalindrome(0)).toBe(true);
//     expect(isPalindrome(1)).toBe(true);
//     expect(isPalindrome(2)).toBe(true);
//     // Single-digit negative numbers are also palindromes
//     expect(isPalindrome(-1)).toBe(true);
//     expect(isPalindrome(-2)).toBe(true);
//   });

  it('should return false for negative numbers', () => {
    // Negative numbers are not palindromes
    expect(isPalindrome(-121)).toBe(false);
    expect(isPalindrome(-12321)).toBe(false);
    expect(isPalindrome(-123321)).toBe(false);
  });
});
