function handleWithTheRatio(arr) {
  const positiveNumbers = arr.filter(item => item >= 1).length
  const ratioOfPositiveNumbers = positiveNumbers/arr.length

  const negativeNumbers = arr.filter(item => item < 0).length
  const ratioOfNegativeeNumbers = negativeNumbers/arr.length

  const zeroNumbers = arr.filter(item => item === 0).length
  const ratioOfZeroNumbers = zeroNumbers/arr.length

  return {
    positve: ratioOfPositiveNumbers.toFixed(6),
    negative: ratioOfNegativeeNumbers.toFixed(6),
    zero: ratioOfZeroNumbers.toFixed(6)
  }
}

module.exports = handleWithTheRatio