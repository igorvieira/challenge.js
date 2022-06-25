const chai = require("chai");
const assert = chai.assert;
const formSentence = require("./index")
chai.config.truncateThreshold=0;

describe("formSentence", () =>  {

  it ("should return empty string for empty array.", () => {
    assert.strictEqual(formSentence([]), "");
  });

  it ("should return a unique word.", () => {
    assert.strictEqual(formSentence(["hello"]), "hello");
  });

  it ("should return multiple sentences", () =>  {
    assert.strictEqual(formSentence(["hello", "world"]), "hello world");
    assert.strictEqual(formSentence(["hello", "amazing", "world"]), "hello amazing world");
    assert.strictEqual(formSentence(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");
  });
});