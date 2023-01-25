const numbers = [1,2,3,4,5, 6]

// console.log(numbers.length)
// console.log(numbers[1])
// const newNumbers = numbers.concat(10000)
// console.log(newNumbers)

// let total = 0

// numbers.forEach(element => total += element)

// console.log(total)

// array = []

function addToBatch(array, number){
  if (array.length >= 5){
    return array
  } else {
    return array.concat(number)
  }
}

console.log(addToBatch(numbers, 3))