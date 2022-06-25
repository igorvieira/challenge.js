const sumPositiveNumbers = require("./index")

describe("sumPositiveNumbers", () => {
  it("should test multiple cenarios about positive numbers", () => {
    expect(sumPositiveNumbers([1,2,3,4,5])).toBe(15);
    expect(sumPositiveNumbers([1,-2,3,4,5])).toBe(13);
    expect(sumPositiveNumbers([])).toBe(0);
    expect(sumPositiveNumbers([-1,-2,-3,-4,-5])).toBe(0);
    expect(sumPositiveNumbers([-1,2,3,4,-5])).toBe(9);
  });
});