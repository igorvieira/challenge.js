const bool2Word = require("./")

describe("bool2Word", () => {
  it("should return true our false after call the function", () => {
    expect(bool2Word(true)).toBe('Yes')
    expect(bool2Word(false)).toBe('No')
   });
});