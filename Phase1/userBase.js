class UserBase {
  constructor(array){
    this.array = array;
  }

 count(){
  return this.array.length
 }

 getNames(){
  return this.array.map(user => user.getName())
 }

 getIntroductions(){
  return this.array.map(user=> user.getIntroduction())
 }

}

module.exports = UserBase;