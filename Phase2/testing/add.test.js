const adds = require('./add.js');

describe('add', () => {
  it('adds 2 and 2', () => {
    expect(adds(2, 2)).toBe(4);
  });

  it('adds 10 and 5', () => {
    expect(adds(10, 5)).toBe(15);
  });
});