function staircase(n) {
   [...Array(n+1).keys()]
    .forEach((_, index) =>
      index !== 0 && console.log(" ".repeat(n-(index)) + '#'.repeat(index))
    )

}

module.exports = staircase