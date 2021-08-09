const maxDigits = (lengthDigits) => {
  if(lengthDigits > 8) {
    throw new Error("The max length of the input should be 8 algarisms");
  }
}

module.exports = {
  maxDigits,
}