// store items in array of objects
// setup empty array to return
// Iterate over every object in object
// If name include search criteria and item price <= price
// add it to array
// return array

function searchCandies(item, price){
  const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
  ];

  
  return matching = candies.filter(candy => candy.name.startsWith(capitalizeFirstLetter(item)) && candy.price <= price).map(candy => candy.name)
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const methods = {'searchCandies': searchCandies, 'capitalizeFirstLetter': capitalizeFirstLetter }

module.exports = methods