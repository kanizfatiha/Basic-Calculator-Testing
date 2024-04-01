const { WeightConverter } = require('../../src/converter');

describe('WeightConverter function', () => {
  it('should convert ounces to pounds and tons correctly', () => {
    const ouncesInput = 4;
    const expectedResults = [
      "0.25 pounds",
      "0.00 tons"
    ];

    const results = WeightConverter("ounces", ouncesInput);

    expect(results).toEqual(expectedResults);
  });

  it('should convert pounds to ounces and tons correctly', () => {
    const poundsInput = 2;
    const expectedResults = [
      "32.00 ounces",
      "0.00 tons"
    ];

    const results = WeightConverter("pounds", poundsInput);

    expect(results).toEqual(expectedResults);
  });

  it('should convert tons to pounds and ounces correctly', () => {
    const tonsInput = 0.5;
    const expectedResults = [
      "1000.00 pounds",
      "16000.00 ounces"
    ];

    const results = WeightConverter("tons", tonsInput);

    expect(results).toEqual(expectedResults);
  });

  it('should return "wrong input" for incorrect measurement', () => {
    const invalidMeasurement = "kilograms";

    const result = WeightConverter(invalidMeasurement, 10);

    expect(result).toBe("wrong input");
  });

//   it('should log the correct result when converting ounces to pounds', () => {
//     const ouncesInput = 4;
//     const expectedLogs = [
//       "4 ounces converts to 0.25 pounds",
//       "4 ounces converts to 0.00 tons"
//     ];

//     // Mock console.log
//     const originalLog = console.log;
//     console.log = jest.fn();

//     // Call WeightConverter function
//     WeightConverter("ounces", ouncesInput);

//     // Restore console.log
//     console.log = originalLog;

//     // Check if console.log was called with the expected arguments
//     expect(console.log).toHaveBeenCalledTimes(2);
//     expect(console.log.mock.calls[0][0]).toBe(expectedLogs[0]);
//     expect(console.log.mock.calls[1][0]).toBe(expectedLogs[1]);
//   });

});
