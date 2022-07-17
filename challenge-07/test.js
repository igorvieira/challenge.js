const filterIntegersAndMathPow = require('.')
const mock = require('./mock')

const expectedValue = [0, 1, 9, 16, 49, 81]

describe('filterIntegersAndMathPow', () => {
  it('should return the correct list of function ', () => {
    expect(filterIntegersAndMathPow(mock)).toStrictEqual(expectedValue)
    expect(filterIntegersAndMathPow(mock).length).toStrictEqual(6)
  })

  it('should not return the correct list of function ', () => {
    expect(filterIntegersAndMathPow(mock)).not.toStrictEqual(mock)
    expect(filterIntegersAndMathPow(mock).length).not.toStrictEqual(7)
  })
})