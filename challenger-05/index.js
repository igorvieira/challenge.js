function hunterMonsters(bullets, monsters){
  const handleWithMonsters = bullets/monsters

    if (monsters > bullets) {
      return false
    }

    if (monsters === 0 && bullets == 0) {
      return false
    }

    return Math.floor(handleWithMonsters%2) === 0 ? true : false
}

module.exports = hunterMonsters