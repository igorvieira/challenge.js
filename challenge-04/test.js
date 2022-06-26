const sumPositiveNumbers = require('./')

describe('sumPositiveNumbers', () => {
  it('should test multiple cenarios about positive numbers', () => {
    expect(sumPositiveNumbers([1, 2, 3, 4, 5])).toBe(15)
    expect(typeof sumPositiveNumbers([1, 2, 3, 4, 5])).toEqual('number')
    expect(sumPositiveNumbers([1,-2,3,4,5])).toBe(13);
    expect(sumPositiveNumbers([])).toBe(0);
    expect(sumPositiveNumbers([-1,-2,-3,-4,-5])).toBe(0);
    expect(sumPositiveNumbers([-1,2,3,4,-5])).toBe(9);
  })

  it('should test multiple cenarios about not expect of positive numbers function', () => {
    expect(typeof sumPositiveNumbers([1, 2, 3, 4, 5])).not.toEqual('string')
    expect(sumPositiveNumbers([1, 2, 3, 4, 5])).not.toEqual([])
    expect(sumPositiveNumbers([])).not.toBeGreaterThan(0)
    expect(sumPositiveNumbers([-1,2,3,4,-5])).toBeGreaterThan(0)
  })
})
