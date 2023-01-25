const Candy = require('./candy')

describe('candy', () => {
  it('returns the name of the candy', () => {
    const candy = new Candy('mars',3)
    expect(candy.getName()).toBe('mars');
  });

  it('returns the price of the candy', () => {
    const candy = new Candy('mars',3)
    expect(candy.getPrice()).toEqual(3);
  });
});