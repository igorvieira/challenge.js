const { assert } = require("chai")
const sumPositiveNumbers = require("./index")

describe("sumPositiveNumbers", () => {
  it("should test multiple cenarios about positive numbers", () => {
    assert.strictEqual(sumPositiveNumbers([1,2,3,4,5]),15);
    assert.strictEqual(sumPositiveNumbers([1,-2,3,4,5]),13);
    assert.strictEqual(sumPositiveNumbers([]),0);
    assert.strictEqual(sumPositiveNumbers([-1,-2,-3,-4,-5]),0);
    assert.strictEqual(sumPositiveNumbers([-1,2,3,4,-5]),9);
  });
});