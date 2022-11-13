// imate niza od broevi koja sto vi ja prikazuva prosecnata temperatura za sekoj den od nedelata.
// treba da se napise programa koja sto ke ja presmeta prosecnata temperatura za cela nedela

const temperatures = [15, 16, 17, 20, 15, 20, 21]


let sum = 0;
for (const temp of temperatures) {
  sum = sum + temp
}
console.log(sum / temperatures.length)

// Da se ispecati sekoj vtor/tret element od proizvolna niza
const array = [
  'Cat',
  'Dog',
  'Rabbit',
  'Parrot',
  'Horse',
  'Goat',
]

for(let i = 1; i < array.length; i+=2) {
  console.log(array[i])
}

for (let i = 0; i < array.length; i++) {
  if (i % 2 !== 0) {
    console.log(array[i])
  }
}

// Imame niza od random vrednosti i megju niv ima i nevalidni vrednosti (null, undefined). Treba da se napise programa koja sto kje gi isfiltrira nevalidnite vrednosti i kje kreira nova niza od samo onie elementi koi se validni. Za kraj, novata niza od validni vrednosti treba da se ispecati

const validity = [1 , 2, null, 'Username', undefined, 6, 'Password', NaN, 0, '', true, false]
// Output => [1, 2, 'Username', 6, 'Password']

const valid = []

for (const el of validity) {
  if (el) valid.push(el)
}


validity.forEach((el, index) => {
  console.log(index)
  if (el) valid.push(el)
})

console.log(valid)