// Nizi i ciklicno izvruvanje na kod
// Arrays and loops

const string = "string"
const number = 1
const test = null // undefined
const bool = true // false

const array = []; // empty array

const pets = [
  'Cat', // index=0
  'Dog',  // index=1
  'Rabbit', // index=2
  'Parrot'  // index=3
] // array declaration


console.log(pets)

console.log(pets[0]) // => Cat
console.log(pets[2]) 

pets[0] = 'Fish'

pets[4] = 'Cat'

// pets[10] = 'Horse'   IZBEGAVAJTE VAKVI RABOTI (ova kje vnese mnogu prazni elementi vo nizata)

//  pets = 'Fish' ova ke ja prebrise celata niza
console.log(pets)

const temporary = pets[0]
pets[0] = pets[4]
pets[4] = temporary



pets.push('Goat') // dodava element na krajjot na nizata
pets.unshift('Sheep') // dodava element na pocetok na nizata

const deletedElement1 = pets.pop() // brise element od krajot na nizata
const deletedElement2 = pets.shift() // brise element od pocetok na nizata

const length = pets.length




console.log(pets)

const newArray = [1 , "Ana", true, ["Aleksandar", "Petar"], null, undefined]

console.log(newArray[3])
console.log(newArray[3][1])


