// Da se napise programa sto ke proveri dali odreden broj e paren ili neparen

const broj = 0
// edge-case
if (broj === 0) {
  console.log("Brojot ne e nitu paren nitu neparen")
} else {
  if (broj % 2 === 0) {
    console.log("Brojot e paren")
  } else {
    console.log("Brojot e neparen")
  }
}

// Da se napise programa sto ke proveri dali odreden covek (spred vozrasta vo godini- brojka)
// moze da 1. pie alkohol 2. vozi avtomobil 3. glasa na izbori
// 1. mora da ima nad 21 godina
// 2. mora da ima nad 16 godini
// 3. mora da ima nad 18 godini
// Spored vozrasta na covekot, treba da se ispechati (vo konzola) koi od trite uslovi gi ispolnuva
const vozrast = 30

if (vozrast >= 21) {
  console.log("Licnosta moze da pravi se")
} else if (vozrast >= 18) {
  console.log("Licnosta moze da vozii da glasa")
} else if (vozrast >= 16) {
  console.log("Licnost moze da vozi kola")
} else {
  console.log("Licnosta ne moze da pravi nisto od trite")
}

// Imame promenliva koja sto ni go oznacuva vremeto (obicna brojka od 0-24)
// Treba da se napise programa koja sto ke ispecati soodvetna poraka zavisno od toa kolku e chasot

// od 1 - 12 Dobro utro
// 12 - 18 Dobar den
// 18 - 24 Dobra vecher
const time = 10
if (time >=1 && time < 12) {
  console.log("Good morning")
} else if (time >=12 && time < 18) {
  console.log("Good afternoon")
} else if (time >=18 && time <=24) {
  console.log("Good evening")
} else {
  console.log("Are you from the future?")
}

//Imame promenliva koja sto go oznacuva mesecot 1- januari 2-fevruari itn itn...
// Programata treba da ispecati kolku dena ima vo zadadeniot mesec

const year = 2024
const month = 2 // MART
// constole.log(31)

if (month <= 12) {
  switch(month) {
    case 2: {
      if (year % 4 === 0) console.log("29 days")
      else console.log("28 days")
      break
    }
    case 4:
      case 6:
        case 9:
          case 11: {
            console.log("30 days");
            break
          }
    default: {
      console.log("31 days")
      break
    }
  
  }
} else {
  console.log("month is invalid!")
}

