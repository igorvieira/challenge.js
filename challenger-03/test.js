const convertTimeInMilliseconds = require('./')

describe('convertTimeInMilliseconds', () => {
  it('should converte hour, minutes, and seconds to milliseconds', () => {
    expect(convertTimeInMilliseconds(0,1,1)).toBe(61000)
    expect(convertTimeInMilliseconds(1,1,1)).toBe(3661000)
    expect(convertTimeInMilliseconds(0,0,0)).toBe(0)
    expect(convertTimeInMilliseconds(1,0,1)).toBe(3601000)
    expect(convertTimeInMilliseconds(1,0,0)).toBe(3600000)
  })

  it('should not converte hour, minutes, and seconds to milliseconds into another typeof', () => {
    expect(convertTimeInMilliseconds(0,1,1)).not.toBe('')
    expect(convertTimeInMilliseconds(0,1,1)).not.toBe([])
    expect(convertTimeInMilliseconds(0,1,1)).not.toBe(0)
    expect(convertTimeInMilliseconds(0,1,1)).not.toBe({})
  })
})
