const maxDigits = (lengthDigits) => {
  if(lengthDigits > 8) {
    throw new Error("The max length of the input should be 8 algarisms");
  }
}

const otherNumberBesidesZeroOrOne = (binary) => {
  const doesNotHaveOnlyBinaryDigits = binary
  .split('')
  .every((number) => number === '1'
  || number === '0');
  if(!doesNotHaveOnlyBinaryDigits) {
    throw new Error("The app can only receive 0's and 1's");
  }
}

const binaryToDecimal = (binaryNumber) => {
  const binaryString = binaryNumber.toString();
  maxDigits(binaryString.length);
  otherNumberBesidesZeroOrOne(binaryString);
  const revertedArray = binaryNumber.split('').reverse();
  const numbersAfterExponation = revertedArray.map((_, index) => Math.pow(2, index));
  const multiplyiedNumbers = numbersAfterExponation.map((number, index) => number * revertedArray[index]);
  return multiplyiedNumbers.reduce((acc, number) => acc += number, 0); 
}

module.exports = {
  maxDigits,
  otherNumberBesidesZeroOrOne,
  binaryToDecimal,
}
