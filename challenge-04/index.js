function sumPositiveNumbers(arr) {
  return arr.filter(item => item >= 1).reduce((a, b) => a + b, 0)
}

module.exports = sumPositiveNumbers