const ShoppingBasket = require('./shoppingBasket')

describe('ShoppingBasket', () => {
  it('adds an item to the basket', () => {
    const mockCandy = {getPrice: () => 5};
    const basket = new ShoppingBasket();
    basket.addItem(mockCandy)
    expect(basket.items.length).toEqual(1);
  });
});