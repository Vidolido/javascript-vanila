// USLOVNI KOMANDI
// () [] {}


// if (uslov - logicki iskaz) {
//   // code block
//   // komanda 1;
//   // komanda 2;
//   // komanda 3;
// }

// logicki operatori za sporedba -  >, <, >=, =<, ==, !=, ===, !==, !
const a = 10, b = 12;
const uslov = a !== b; // ovaa logicka operacija vi vrakja TRUE ili FALSE

// boolean type = true/false

// if-else structure
if (uslov) {
  console.log("A ne e ednakvo B")
} else {
  console.log("A e ednakvo na B")
}


const broj1 = 8, broj2 = 8;

if (broj1 > broj2) {
  console.log(broj1 + " e pogolem od " + broj2)
} else if (broj1 < broj2) {
  console.log(broj1 + " e pomal od " + broj2)
} else {
  console.log(broj1 + " e ednnakov na " + broj2)
}

if ("Ana" === "Ana") {
  console.log("Iminjata se isti")
} else {
  console.log("Iminjata ne se isti")
}

// one-liner - ternaren operator za sporedba
// const names = "Aleksandar" === "Ana" ? "Iminjata se isti" : "Iminjata ne se isti"
// console.log(names)

const water = 10;
const coffee = 100;

// logicko ILI - operator
if (water < 20 || coffee < 10) {
  // ovoj blok na kod se izvrsuva dokolku e ispolnet barem eden od uslovite
  console.log("Error")
}

// logicko I - operator
if (water > 20 && coffee > 10) {
  // ovoj blok na kod se izvrsuva samo dokolku SITE uslovi se ispolneti
  console.log("Moze da napravime kafe")
}

// switch-case statement
const animal= "Cat"

switch (animal) {
  case "Parrot": {
    console.log("This animal can sing!")
    break
  }

  case "Dog": {
    console.log("This animal can dig!")
    break
  }

  case "Cat": {
    console.log("This animal can purr!")
    break
  }

  default: {
    console.log("Unknown animal!")
  }
}


