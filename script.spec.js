const { it, expect } = require('@jest/globals');
const {
  maxDigits,
  otherNumberBesidesZeroOrOne,
  binaryToDecimal,
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
    expect(() => otherNumberBesidesZeroOrOne("00000000")).not.toThrowError();
    expect(() => otherNumberBesidesZeroOrOne("11111111")).not.toThrowError();
    expect(() => otherNumberBesidesZeroOrOne("01010010")).not.toThrowError();
  });
});

describe('Check if the main function returns the correct values', () => {
  it('check if the main function returns the expected integers', () => {
    expect(binaryToDecimal('11111111')).toEqual(255);
    expect(binaryToDecimal('1')).toEqual(1);
    expect(binaryToDecimal('10010')).toEqual(18);
    expect(binaryToDecimal('100000')).toEqual(32);
    expect(binaryToDecimal('11010')).toEqual(26);
    expect(binaryToDecimal('0')).toEqual(0);
  });
  it('check if call the main function with invalid parameters throw a error', () => {
    expect(binaryToDecimal('00002000')).toThrow();
    expect(binaryToDecimal('00000000000000000')).toThrow();
  });
});

