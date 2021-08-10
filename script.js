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

const binaryToDecimal = () => {
  maxDigits('100101');
  otherNumberBesidesZeroOrOne('1010010')
}

module.exports = {
  maxDigits,
  otherNumberBesidesZeroOrOne,
  binaryToDecimal,
}
