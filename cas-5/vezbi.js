const sq1 = {
    height: 100,
    width: 50
}

const calculateArea = (square) => {
    return square.width * square.height;
}

console.log(calculateArea(sq1))

const person = {
    name: 'Goce',
    pets: ['Cat', 'Dog', 'Parrot'],
}

const person2 = {
    name: 'Boshko',
    pets: ['Turtles']
}

const people = [person, person2];

function displayPets(pple) {
    pple.forEach(person => console.log(`${person.name} ima ${person.pets.length} milenici`));
}

displayPets(people)

const students = [
    {
        id: 1,
        name: 'Goce',
        year: 1,
        courses: [
            {name: 'math', grade: 7},
            {name: 'chemistry', grade: 8},
            {name: 'programming',grade: 9}
        ]
    },
    {
        id: 2,
        name: 'Boshko',
        year: 2,
        courses: [
            {name: 'math', grade: 3},
            {name: 'chemistry', grade: 5},
            {name: 'programming',grade: 10},
            {name: 'physics', grade: 3}
        ]
    },
    {
        id: 3,
        name: 'Brane',
        year: 1,
        courses: [
            {name: 'math', grade: 2},
            {name: 'chemistry', grade: 4},
            {name: 'programming',grade: 6}
        ]
    }
]

// da se napishe funkcija koja shto za sekoj student kje go presmeta prosekot

students.forEach(student => {
    let prosek = 0;
    student.courses.forEach(course => {
        prosek += course.grade
    })
    console.log(student.name, prosek/student.courses.length)
})

function calculateAvgGrade(allStudents) {
    // const averageGradeForStudent = allStudents.map(student => {
    //     const avgGrade = student.courses.reduce((acc, curent) => {return acc + curent.grade}, 0) / student.courses.length
    //     return `${student.name} has an average grade of ${avgGrade}`
    // })

    // return averageGradeForStudent;
    const array = [];
    allStudents.forEach(student => {
        const avgGrade = student.courses.reduce((acc, curent) => acc + curent.grade,0) / student.courses.length;
        console.log(`${student.name} has an average grade of ${avgGrade}`);
        array.push({ name: student.name, averageGrade: avgGrade});
    });
    return array;
}
const averageGrades = calculateAvgGrade(students);
console.log(averageGrades)


// da se napishe funkcija koja shto za istata lista od studenti, dokolku studentot ima prosek povisok od 8, treba da se smesti vo posebna niza bidejki ispolnuva uslovi za stipendija.
// otkako kje se ispolnu listata da se otpechatat iminjata na site studenti koi go isplnuvaat uslovot

function canReceiveScholarsihp(gradeList) {
    return gradeList.filter(student => student.averageGrade >= 8)
}
let valid = canReceiveScholarsihp(averageGrades)
console.log(valid)

// imame lista od knigi, kade shto sekoja kniga e objekt so slednite svojstva: ime, avtor, godina na izdavanje, ISBN, cena i read?:(boolean). Treba da se izmine listata i da se napravi suma na site knigi gi shto gi nemam prochitano

const booksArray = [
    {
        author: 'Fydor Dostoyevsky',
        name: 'Crime and punishment',
        year: 1887,
        ISBN: 1,
        price: 500,
        read: true
    },
    {
        author: 'J.R.R. Tolkien',
        name: 'The Hobbit',
        year: 1910,
        ISBN: 3,
        price: 1000,
        read: false   
    },
    {
        author: 'J.K.Rowling',
        name: 'Harry Potter',
        year: 2000,
        ISBN: 2,
        price: 600,
        read: false
    },
]

function calculateTotalPrice(books) {
    return books.reduce((cuurrentSum, book) => {
        if(!book.read) {
            return cuurrentSum += book.price
        }
        return cuurrentSum;
    },0 )
}

console.log(calculateTotalPrice(booksArray))