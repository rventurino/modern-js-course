
//Create a promise
const promise = new Promise((resolve, reject) => {
    //Do some async task (represented by setTimeout)
    setTimeout(() => {
        console.log('Async task complete');
        resolve()
    }, 1000);
});

// promise.then(() => {
//     console.log('Promise consumed.');
// })

const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false; 

        if(!error){
            resolve({name: 'Ryan', age: 29})
        } else {
            reject('Error, something went wrong')
        }
    }, 1000);
});
getUser.then((user) => console.log(user)).catch((error) => console.log(error)).finally(() => console.log('The promise has been resolved or rejected.'));

//Normaly this clg would happen AFTER
console.log('Hello from global scope');