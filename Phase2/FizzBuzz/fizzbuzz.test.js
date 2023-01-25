const fizzbuzz = require("./fizzbuzz");

describe('fizzbuzz', () =>{
  it('takes in 3 and returns Fizz', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });
  
  it('takes in 5 and returns Fizz', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });
  
  it('takes in 8 and returns 8', () => {
    expect(fizzbuzz(8)).toBe(8);
  });
  
  it('takes in 15 and returns FizzBuzz', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });
});