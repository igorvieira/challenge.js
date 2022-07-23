
function handleWithTheMaxMin(arr) {
  let sum = arr.reduce((a, b) => a + b)
  let maxVal = Math.max(...arr)
  let minVal = Math.min(...arr)

  return `${sum - maxVal} ${sum - minVal}`
}

module.exports = handleWithTheMaxMin