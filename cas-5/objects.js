let person = {
    // properties
    // key : value pairs
    name: "Goce",
    gender: 'male',
    age: 30,
    height: 170,
    weight: null,
    eat: () => { console.log(`${person.name} ate an apple`)}
}

let person2 = {
    // properties
    // key : value pairs
    name: 'Goce',
    gender: 'male',
    age: 30,
    height: 170,
    weight: null,
    eat: () => { console.log(`${person.name} ate an apple`) }
}
console.log(person);

person.gender = 'female';
delete person.gender;
console.log(person.gender);
console.log(person['gender'])

person = person2

// console.log(person);

// person2.weight = 100;
// console.log(person)

// let person3 = {...person};
let person3 = Object.assign({profession: 'programmer'}, person)
let person4 = {
    ...person,
    profession: 'accountant',
    age: 40
};

person3.age = 20;
person3.gender = 'female';

console.log(person3)
console.log(person4)


console.log(person.eat())
// function walk() => {}