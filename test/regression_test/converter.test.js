const { expect } = require('chai');
const { WeightConverter } = require('../../src/converter'); // Assuming your module is in a file named 'yourModule.js'

describe('WeightConverter', () => {
    it('should convert ounces to pounds and tons', () => {
        const result = WeightConverter("ounces", 4);
        expect(result[0]).to.equal("0.25 pounds");
        expect(result[1]).to.equal("0.00 tons");
    });

    it('should convert pounds to ounces and tons', () => {
        const result = WeightConverter("pounds", 1);
        expect(result[0]).to.equal("16.00 ounces");
        expect(result[1]).to.equal("0.00 tons");
    });

    it('should convert tons to pounds and ounces', () => {
        const result = WeightConverter("tons", 0.5);
        expect(result[0]).to.equal("1000.00 pounds");
        expect(result[1]).to.equal("16000.00 ounces");
    });

    it('should return "wrong input" for invalid input', () => {
        const result = WeightConverter("invalid", 10);
        expect(result).to.equal("wrong input");
    });
});
