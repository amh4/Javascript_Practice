class ShoppingBasket{
  constructor(){
    this.items = []
  }

  addItem(item){
    return this.items.push(item);
  }

  getTotalPrice(){
    return this.items.map(item => item.getPrice())
  }



  
}

module.exports = ShoppingBasket;