const methods = require('./searchCandies.js');

const searchCandies = methods['searchCandies']
const capitalizeFirstLetter = methods['capitalizeFirstLetter']

describe('searchCandies', () => {
  it('takes in ae and 2 and returns [Aero]', () => {
    expect(searchCandies('Ae',2)).toEqual(['Aero'])
  });

  it('takes in Sk and 2 and returns [Skittles]', () => {
    expect(searchCandies('Sk',2)).toEqual(['Skittles'])
  });

  it('takes in lower case s and 2 and returns [Skittles]', () => {
    expect(searchCandies('sk',2)).toEqual(['Skittles'])
  });
});

describe('capitalise first letter', () => {
  it('takes in ae and returns Ae', () => {
    expect(capitalizeFirstLetter('ae')).toEqual('Ae')
  });
});