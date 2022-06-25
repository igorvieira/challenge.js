const chai = require("chai");
const assert = chai.assert;
const hunterMonsters = require("./")
chai.config.truncateThreshold=0;

describe('hunterMonsters', function() {
  it("should test multiple situations to handle with monster", () => {
    assert.strictEqual(hunterMonsters(10, 5), true);
    assert.strictEqual(hunterMonsters(7, 4), false);
    assert.strictEqual(hunterMonsters(4, 5), false);
    assert.strictEqual(hunterMonsters(100, 40), true);
    assert.strictEqual(hunterMonsters(1500, 751), false);
    assert.strictEqual(hunterMonsters(0, 1), false);
  });
});