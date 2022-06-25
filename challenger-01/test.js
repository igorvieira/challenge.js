const bool2Word = require('./')

describe('bool2Word', () => {
  it('should return the correct value about this function', () => {
    expect(bool2Word(true)).toBe('Yes')
    expect(bool2Word(false)).toBe('No')
  })

  it('should not return the correct value about this function', () => {
    expect(bool2Word(false)).not.toBe('Yes')
    expect(bool2Word(true)).not.toBe('No')
  })
})
