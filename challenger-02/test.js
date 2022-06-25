const formSentence = require("./index")

describe("formSentence", () =>  {

  it ("should return empty string for empty array.", () => {
   expect(formSentence([])).toBe("");
  });

  it ("should return a unique word.", () => {
   expect(formSentence(["hello"])).toBe("hello");
  });

  it ("should return multiple sentences", () =>  {
   expect(formSentence(["hello", "world"])).toBe("hello world");
   expect(formSentence(["hello", "amazing", "world"])).toBe("hello amazing world");
   expect(formSentence(["this", "is", "a", "really", "long", "sentence"])).toBe("this is a really long sentence");
  });
});