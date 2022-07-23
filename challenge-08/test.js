const staircase = require('.')

// jest.spyOn(console, 'log');

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
})

afterEach(() => {
  jest.clearAllMocks();
});

test("staircase", () => {
  expect(console.log.mock.calls.length).toBe(0);
  staircase(4);
  expect(console.log.mock.calls.length).toBe(4);
  // [["   #"], ["  ##"], [" ###"], ["####"]]

  const contentView = console.log.mock.calls

  contentView.forEach((_, i) => {
    contentView.forEach((_, j) => {
      console.log(contentView[i],[j])
      expect(contentView[i][j]).toBe(contentView[i][j])
    });
  });
});

