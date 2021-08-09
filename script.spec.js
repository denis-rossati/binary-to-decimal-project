const { expect } = require('@jest/globals');
const {
  maxDigits,
} = require('./script');

describe('check if the main functions are working', () => {
  it("should throw an error if the digit length are greater than 8", () => {
    expect(() => maxDigits(9)).toThrowError('The max length of the input should be 8 algarisms')
  });
});