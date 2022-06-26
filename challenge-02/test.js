const formSentence = require('./')

describe('formSentence', () => {

  it("should return empty string for a empty array", () => {
    expect(formSentence([])).toBe("")
  })

  it("should return a single world", () => {
    expect(formSentence(['hello'])).toBe("hello")
  })

  it("should return multiple sentences", () => {
    expect(formSentence(["hello", "world"])).toBe("hello world")
    expect(formSentence(["hello", "amazing", "world"])).toBe("hello amazing world")
    expect(formSentence(["this", "is", "a", "really", "long", "sentence", "for", "sure"])).toBe("this is a really long sentence for sure")
  })

  it("should not return a incorrect value", () => {
    expect(formSentence(["hello", "world"])).not.toBe([])
    expect(formSentence(["hello", "amazing", "world"])).not.toBe("")
    expect(formSentence(["this", "is", "a", "really", "long", "sentence", "for", "sure"])).not.toBe("hello world")
  })
})
