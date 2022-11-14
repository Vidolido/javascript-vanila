// prva zadacha

const array1 = [1,2,3,4,5,11,12];
const array2 = [6,7,8,9,10,13,14,15,16];

const result = [];
const len = array1.length > array2.length ? array1.length : array2.length;

for(let i = 0; i < array1.length; i++) {
    const el1 = array1.shift();
    const el2 = array2.shift();
    if(el1) result.push(el1)
    if(el2) result.push(el2)
    // result.push(array1.shift());
    // result.push(array2.shift());
}

console.log(result);

// vtora zadacha

const numbers = [1,2,3,4,5,11,12];

if(!numbers.length) {
    console.log('List is empty');
} else {
    let min = numbers[0];
    let max = numbers[0];

    for(const num of numbers) {
        if(num < min) {
            min = num;
        } else if(num > max) {
            max = num;
        }
    }

    console.log(min, max);

}


