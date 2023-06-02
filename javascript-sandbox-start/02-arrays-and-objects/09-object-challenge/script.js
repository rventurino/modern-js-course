const library = [
    {
        title: 'Enders Game',
        author: 'me',
        status:{
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'The Stand',
        author: 'Stephen King',
        status:{
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Your mom the novel',
        author: 'Your Dad',
        status:{
            own: true,
            reading: false,
            read: false
        }
    }
]

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.table(library[0].status)
console.table(library[1].status)
console.table(library[2].status)

/*
JavaScript Object Destructuring is an expression which allows us to access the data from objects like arrays, objects, maps and assign it to new variables.
*/
//step 3 destructure  title and change to first book
const {title: firstBook} = library[0]

console.log(library[0]);
console.log(firstBook);
//Step 4 turn in to JSON string
const libraryToJSON = JSON.stringify(library);
console.log(libraryToJSON);