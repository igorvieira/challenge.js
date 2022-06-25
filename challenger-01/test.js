const { assert } = require("chai")
const bool2Word = require("./")

describe("bool2Word", () => {
  it("should return true our false after call the function", () => {
    assert.strictEqual(bool2Word(true), 'Yes')
    assert.strictEqual(bool2Word(false), 'No')
   });
});