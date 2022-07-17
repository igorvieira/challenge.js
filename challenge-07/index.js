
function filterIntegersAndMathPow(arr) {
  return arr
            .filter(x => Number.isInteger(x))
            .map(x => Math.pow(x, 2))
}

module.exports = filterIntegersAndMathPow