// JSON - javascript object notation

// { name: 'Goce' } => { 'name' : 'Goce' }

//JSON.stringify(obj) // konvertira od objekt vo json string

//JSON.parse(json) // konvertira od json string vo plain object

fetch('https://jsonplaceholder.typicode.com/todos/1') // end-point
.then(res => res.json())
.then(json => console.log(json))



fetch('https://jsonplaceholder.typicode.com/posts') // end-point
.then(res => res.json())
.then(json => {
    console.log(json)
})
.catch(error => console.log(error))

// async function getTodos() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = await response.json();
//     console.log(data);
// }

// getTodos();