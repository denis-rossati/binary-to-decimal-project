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

  it("should throw an error if there is any number other than 0 or 1", () => {
    expect(() => otherNumberBesidesZeroOrOne("00000002")).toThrowError("The app can only receive 0's and 1's");
    expect(() => otherNumberBesidesZeroOrOne("00100500")).toThrowError("The app can only receive 0's and 1's");
    expect(() => otherNumberBesidesZeroOrOne("00105200")).toThrowError("The app can only receive 0's and 1's");
  });
  
  it("should not throw an error if the numbers are just 0's and 1's", () => {
    expect(() => otherNumberBesidesZeroOrOne("00000000")).toThrowError("The app can only receive 0's and 1's");
    expect(() => otherNumberBesidesZeroOrOne("11111111")).toThrowError("The app can only receive 0's and 1's");
    expect(() => otherNumberBesidesZeroOrOne("01010010")).toThrowError("The app can only receive 0's and 1's");
  });
});

