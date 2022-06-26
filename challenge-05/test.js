
const hunterMonsters = require("./")

describe('hunterMonsters', function() {
  it("should test multiple situations to handle with monster", () => {
   expect(hunterMonsters(10, 5)).toBe(true);
   expect(hunterMonsters(7, 4)).toBe(false);
   expect(hunterMonsters(4, 5)).toBe(false);
   expect(hunterMonsters(100, 40)).toBe(true);
   expect(hunterMonsters(1500, 751)).toBe(false);
   expect(hunterMonsters(0, 1)).toBe(false);
  });
});