class ShoppingBasket{
  constructor(){
    this.basket = []
  }

  addItem(item){
    return this.basket.push(item);
  }

  getTotalPrice(){
    return this.basket.map(item => item.getPrice())
  }
}

module.exports = ShoppingBasket;