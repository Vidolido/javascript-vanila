// Function declaration
function myFirstFunction(greetings, name) {
    // function body
    // code executed by the function

    console.log(greetings + ' ' + name);

    return
}

// function call / function invocation
myFirstFunction('Hello', 'Goce');

function sum(num1, num2) {
    const result = num1 + num2;
    return result;
}

let result = sum(4,5);
console.log(result);

const string = ['z', 'd', 'r', 'a', 'v', 'o'];
let text = '';

text = string.join('');
console.log(text)
console.log(text.split(''));

// Da se napishe funkcija koja kako parametar dobiva ime vo tekstualen format (string) i gi vrakja inicijalite od zadadenoto ime (RETURN na INICIJALI)

function getInitials(name) {
    let first = name.split(' ');
    let initials = '';
    for(let word of first) {
        initials += word[0];
    }
    return initials;
}
console.log(getInitials('John Ronald Reuel Tolkien'))

// Da se napishe funkcija koja shto kako parametar prima temperatura(brojka) vo farenhajtovi stepeni i treba da ja vrati nejzinata vrednost vo celziusovi. Formulata za konverzija e 1C = (1F - 32) * 5 / 9

// 100 => 38

function fahreinheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}
console.log(fahreinheitToCelsius(100));

// Da se napishe funkcija koja shto kje knevrtira UTC Datum vo sledniot format ==> 'dd/mm/yyyy'

// const date = new Date();
// const month = date.getMonth()
// date.getFullYear();
// date.getDay();
// date.getHours();
// date.getMinutes();

// console.log(`${date.getDay()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`)

// console.log(date)

function convertDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() +1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${day}/${month}/${year} -- ${hours}:${minutes}`
}

console.log(convertDate())