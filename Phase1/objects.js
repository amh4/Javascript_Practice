const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

console.log(person['address']['city'])
console.log(person['hobbies'][1])

const cohort = {
  name: 'May2022',
  id: 1234,
  students: ['Bill', 'Mary', 'Sally']
}

function cohortInfo(object){
  console.log(`${object['name']} - ${object['id']} - ${object['students']}`)
}

console.log(cohortInfo(cohort))