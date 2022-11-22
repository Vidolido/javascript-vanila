// 1. Imate niza od korisnicki email adresi.
// Da se napise funkcija koja  treba da proveri dali sekoj od mailovite e validen
// validen mail e toj mail sto im karakter "@", ".com" ili ".net" i nema prazni mesta
// Otkako ke zavrsi proverkata, treba VO NOVA niza, da se stavat site nevalidni mejlovi, dokolku ima takvi i novata niza da se ispecati

const emails = ['npoasmdpoa','bole@odiam.entasrds','test@test.com', 'test123123', 'koco@koco.net', 'test@koco.co'];

const notMail = emails.filter(wrong => !/^[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(wrong));

console.log(notMail, 'Prva zadacha');

// 2. Da se napise funkcija koja sto ke prima lista od iminja i preziminja
//   Funkcijata treba da proveri dali site iminja i preziminja zapocnuvaat so golema bukva,
//   i ako ne, togas da ja napravi golema. Site ostanati bukvi, treba da se pretvorat vo mali.
//   Na kraj da se ispecati nizata od transformirani iminja

// Primer: const names = ['koco nica', 'alek Dimitriev'] => ['Koco Nica', 'Alek Dimitriev']

let names = ['koco nica', 'alek Dimitriev', 'Boshko Boshkovski', 'Blagoja dimchevski', 'vlajkovski', 'viktorija velika juntev'];

const checkForUppercase = (checkArray) => {
        let namesCorected = [];
        checkArray.forEach((nameCheck, index) => {
        const nameArray = nameCheck.split(' ');
        namesCorected[index] = nameArray.reduce((acc, word) => ( acc + (acc === '' ? '' : ' ') + word[0].toUpperCase() + word.slice(1)), '');
    })
    return namesCorected;
}

console.log(checkForUppercase(names), 'Vtora zadacha');

// so map();



// 3. Imame nizaod zivotni na farma.
// Sekoe zivotno e objekt i si ima svoe property broj na noze, i plus drugi svojstva
// So pomosh na posebna funkcija, farmerot treba da izbroi kolku vkupno noze ima vo farmata.

// Primer: const myAnimals = [
//   { type: 'Horse', numberOfLegs: 4 },
//   { type: 'Sheep', numberOfLegs: 4 },
//   { type: 'Chicken', numberOfLegs: 2 },
//   { type: 'Fish', numberOfLegs: 0 },
//   { type: 'Dog', age: 7, numberOfLegs: 4 },
//   { type: 'Goat', numberOfLegs: 4 }
// ] ===> TOTAL OF 18 LEGS!

const myAnimals = [
    { type: 'Horse', numberOfLegs: 4 },
    { type: 'Sheep', numberOfLegs: 4 },
    { type: 'Chicken', numberOfLegs: 2 },
    { type: 'Fish', numberOfLegs: 0 },
    { type: 'Dog', age: 7, numberOfLegs: 4 },
    { type: 'Goat', numberOfLegs: 4 }
];

console.log(myAnimals.reduce((acc, legs) => (acc + legs.numberOfLegs), 0), 'Treta zadacha');

// 4. Da se napise funkcija koja ke presmetuva kolku vkupno poeni
// osvoil nekoj sportski tim
// Sportskiot tim e objekt vo koj sto imate broj na porazi,
// broj na pobedeni i broj na neresheni natprevari
// Za sekoja pobedena timot dobiva 3 poeni, za nereshena 1, a za izgubena -2

// const team = {
//   wins: 3,
//   losses: 4,
//   draws: 2
// } ==> total points: 7

const team = {
  wins: 3,
  losses: 4,
  draws: 2
}
let totalPoints = 0;
for(let points in team) {
    //Prv obid so if statement

    // if(points === 'wins') {
    //     totalPoints += team[points]*3;
    // }
    // if(points === 'draws') {
    //     totalPoints += team[points];
    // }
    // if(points === 'losses') {
    //     totalPoints -= team[points]*2;
    // }

    // Vtor obid so ternary operator 
    points === 'wins' ? totalPoints += team[points]*3 :
    points === 'losses' ? totalPoints -= team[points]*2 : totalPoints += team[points];
}
console.log(totalPoints, 'Chetvrta zadacha');


// 5. Listata od knigi sto ja rabotevme na chas, da se sortira po azbucen rodosled spored imeto na avtorot

const myBooks = [
    {
        author: 'J.R.R. Tolkien',
        name: 'The Hobbit',
        year: 1910,
        ISBN: 3,
        price: 1000,
        read: true
    },
    {
      author: 'Fyodor Dostoyevsky',
      name: 'Crime and punishment',
      year: 1887,
      ISBN: 1,
      price: 500,
      read: false
    },
    {
      author: 'J.K. Rowling',
      name: 'Harry Potter',
      year: 2000,
      ISBN: 2,
      price: 600,
      read: false
    }
  ];

myBooks.sort((a,b) => {
    return (a.author < b.author) ? -1 : (a.author > b.author) ? 1 : 0;
})

console.log(myBooks);