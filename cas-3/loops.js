// while (uslov) {
//   // komanda 1
//   // komanda 2
//   // komanda 3
//   // komanda 4
// }

// do {
//   // komanda 1
//   // komanda 2
//   // komanda 3
//   // komanda 4
// } while (uslov)

let number = 0; // iterator
while (6 > number) {
  console.log("6 e pogolemo od " + number)
  number++ // number = number + 1 // number += 1
}

// da se ispechatat prvite 10 000 broja
let num = 0;
while (num <= 100) {
  console.log(num)
  num++
}

// da se ispecatat site milenici od nizata
const pets = [
  'Cat', // index=0
  'Dog',  // index=1
  'Rabbit', // index=2
  'Parrot',  // index=3
  'Horse',
  'Goat',
]

let i = 0;
while(i < pets.length) {
  console.log(pets[i])
  i++
}

for(let i = 0; i < pets.length; i++) {
  console.log(pets[i])
}

for (let i = pets.length - 1; i >= 0; i--) {
  console.log(pets[i])
}

for (let pet of pets) {
  console.log(pet)
}