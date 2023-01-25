const multiply = require("../../Phase1/multiply");

describe('multiply', () =>{
  it('multiplies 10 and 10', () => {
    expect(multiply(10, 10)).toBe(100);
  });
  
  it('multiplies 15 and 2', () => {
    expect(multiply(15, 2)).toBe(30);
  });
});