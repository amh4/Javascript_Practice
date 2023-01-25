// const phoneNumbers = ['1763687364',
//   '4763687363',
//   '7867867862',
//   'AAAA#####AAAA#87@768767382672',
//   '4763687363',
//   '4763687363'];


// // function checkLength(phoneNumber){
// //   if (phoneNumber.length <= 10){
// //     return true
// //   } else {
// //     return false
// //   }
// // }

// // function filterLongNumbers(array){
// //   return array.filter(checkLength)
// // }

// // console.log(filterLongNumbers(phoneNumbers))

const names = ['A', 'B', 'C', 'D']

function generateMessages(names){
  return names.map(name => `Hi ${name}! 50% off our best candies for you today!`)
}

console.log(generateMessages(names))

// An array of objects!
const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

function newGenerateMessages(names){
  return names.map(name => `Hi ${name['name']}! ${name['discount']}% off our best candies for you today!`)
}

console.log(newGenerateMessages(namesAndDiscounts))