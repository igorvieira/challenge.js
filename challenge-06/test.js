const handleWithTheRatio = require('./')
const firstMock = [1, 1, 0,  -1, -1]
const secondMock = [-4, 3, -9, 0, 4, 1]

const firstExpectedValue = {
  "negative": "0.400000",
  "positve": "0.400000",
  "zero": "0.200000",
}

const secondExpectedValue = {
  "negative": "0.333333",
  "positve": "0.500000",
  "zero": "0.166667"
}

describe('handleWithTheRatio', () => {
  it('should return the correct value about the ratio', () => {
    expect(handleWithTheRatio(firstMock)).toStrictEqual(firstExpectedValue)
    expect(handleWithTheRatio(firstMock).negative).toEqual(firstExpectedValue.negative)
    expect(handleWithTheRatio(firstMock).positve).toEqual(firstExpectedValue.positve)
    expect(handleWithTheRatio(firstMock).zero).toEqual(firstExpectedValue.zero)
    expect(handleWithTheRatio(secondMock)).toStrictEqual(secondExpectedValue)
    expect(handleWithTheRatio(secondMock).negative).toEqual(secondExpectedValue.negative)
    expect(handleWithTheRatio(secondMock).positve).toEqual(secondExpectedValue.positve)
    expect(handleWithTheRatio(secondMock).zero).toEqual(secondExpectedValue.zero)
  })

  it('should not return the correct value about the ratio', () => {
    expect(handleWithTheRatio(firstMock).negative).not.toEqual(firstExpectedValue.zero)
    expect(handleWithTheRatio(firstMock).positve).not.toEqual(firstExpectedValue.zero)
    expect(handleWithTheRatio(firstMock).zero).not.toEqual(firstExpectedValue.negative)
    expect(handleWithTheRatio(firstMock).zero).not.toEqual(firstExpectedValue.positve)
    expect(handleWithTheRatio(secondMock).negative).not.toEqual(secondExpectedValue.zero)
    expect(handleWithTheRatio(secondMock).positve).not.toEqual(secondExpectedValue.zero)
    expect(handleWithTheRatio(secondMock).zero).not.toEqual(secondExpectedValue.negative)
    expect(handleWithTheRatio(secondMock).zero).not.toEqual(secondExpectedValue.positve)
  })
})