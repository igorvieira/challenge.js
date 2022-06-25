function convertTimeinMilliseconds(hour, minutes, seconds) {
  const ms = seconds * 1000
  const min = minutes * 60 * 1000
  const h = hour * 60 * 60 * 1000

  return ms + min + h
}

module.exports = convertTimeinMilliseconds
