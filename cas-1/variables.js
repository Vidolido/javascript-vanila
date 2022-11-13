// program 1

// var - kluchno zborce za definiranje / deklariranje na globlani promenlivi
// let - kluchno zborce za definiranje na lokalna promenliva
// const - definiranje na konstanti
let username = 'Alek', emailAddress = 'test@test.com'


console.log(username)

// so operatorot "=" zadavame vrednost na promenlivi
username = 'Kocho'

// so console.log gi pechatime vrednostite na promenlivite
console.log(username, emailAddress)

const a = 7;
const b = a;
const zbir = a + b;
console.log(zbir)

// string concatenation (spojuvanje na tekst)
console.log(username + emailAddress)

// PAZETE, OVA E TEKST, NE E BROJ!
const notANumber = '10';

// NULL e prazna vrednost (prazna kutija)
let test = null;

// UNDEFINED e nedefinirna vrednost (nema kutija)
test = undefined;
console.log(test)