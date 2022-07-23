const handleWithTheMaxMin = require('.')


describe('handleWithTheMaxMin', () => {

  it('should return the correct value', () => {
    expect(handleWithTheMaxMin([1, 2, 3, 4, 5])).toBe('10 14')
    expect(handleWithTheMaxMin([1, 3, 5, 7, 9])).toBe('16 24')
    expect(handleWithTheMaxMin([396285104, 573261094, 759641832, 819230764, 364801279]))
      .toBe('2093989309 2548418794')
  })

  it('should not return the correct value', () => {
    expect(handleWithTheMaxMin([1, 2, 3, 4, 5])).not.toBe('10 15')
    expect(handleWithTheMaxMin([1, 3, 5, 7, 9])).not.toBe('17 24')
    expect(handleWithTheMaxMin([396285104, 573261094, 759641832, 819230764, 364801279]))
      .not.toBe('2093989308 2548418793')
  })
})
