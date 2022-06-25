function convertTimeInMilliseconds(hour, minuts, seconds) {
  const ms = seconds * 1000;
  const min = minuts * 60 * 1000
  const h = hour * 60 * 60 * 1000

  return ms + min + h
}

module.exports = convertTimeInMilliseconds