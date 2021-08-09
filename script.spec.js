const { describe } = require('yargs');
const {
  maxDigits,
  otherNumberBesidesZeroOrOne,
} = require('./script');

describe('check if the validation functions are working', () => {
  it("should throw an error if the digit length are greater than 8", () => {
    expect(() => maxDigits(9)).toThrowError('The max length of the input should be 8 algarisms')
  });
  it("should not throw an error if the digits are lesser than 9", () => {
    expect(() => maxDigits(8)).not.toThrow();
  });
});

