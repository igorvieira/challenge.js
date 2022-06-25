const convertTimeInMilliseconds = require("./index")
const chai = require("chai");
const assert = chai.assert;

describe("convertTimeInMilliseconds", () => {
  it("should converte hour, minutes, and seconds to milliseconds", () => {
    assert.strictEqual(convertTimeInMilliseconds(0,1,1), 61000)
    assert.strictEqual(convertTimeInMilliseconds(1,1,1), 3661000)
    assert.strictEqual(convertTimeInMilliseconds(0,0,0), 0)
    assert.strictEqual(convertTimeInMilliseconds(1,0,1), 3601000)
    assert.strictEqual(convertTimeInMilliseconds(1,0,0), 3600000)
  });
});