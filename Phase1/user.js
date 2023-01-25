class User {
  constructor(name){
    this.name = name
  }

  getName() {
    console.log(this.name);  
  }

  getIntroduction() {
    console.log(`Hi, my name is ${this.name}`)
  }
}

module.exports = User;