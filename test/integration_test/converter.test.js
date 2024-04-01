const { expect } = require('chai');
const { WeightConverter } = require('../../src/converter'); // Assuming your module is in a file named 'yourModule.js'

describe('Integration tests for WeightConverter function', () => {
    it('should correctly convert between different units of weight', () => {
        // Test converting ounces to pounds and tons
        let result = WeightConverter("ounces", 64);
        expect(result[0]).to.equal("4.00 pounds");
        expect(result[1]).to.equal("0.00 tons");

        // Test converting pounds to ounces and tons
        result = WeightConverter("pounds", 2);
        expect(result[0]).to.equal("32.00 ounces");
        expect(result[1]).to.equal("0.00 tons");

        // Test converting tons to pounds and ounces
        result = WeightConverter("tons", 0.5);
        expect(result[0]).to.equal("1000.00 pounds");
        expect(result[1]).to.equal("16000.00 ounces");
    });

    it('should return "wrong input" for invalid input', () => {
        // Test invalid input
        const result = WeightConverter("invalid", 10);
        expect(result).to.equal("wrong input");
    });
});
