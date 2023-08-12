//{value: 1, done: false}
/*
const app = {
    nextIndex: 0,
    teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
    next(){
        if(this.nextIndex >= this.teams.length){
            return{done: true}
        }

        const returnValue = {value: this.teams[this.nextIndex], done: false}
        this.nextIndex++;
        return returnValue;
    }
}
console.log(app.next());
console.log(app.next());
console.log(app.next());
console.log(app.next());
console.log(app.next());
console.log(app.next());

for (const team of app) {
    console.log(team);
    
    // RETURNS: 
    // Uncaught TypeError: app is not iterable
    // at script.js:23:20
}
*/

const app = {
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length
          ? { value: this.teams[nextIndex++], done: false }
          : { done: true };
      },
    };
  },
};

const iterator = app[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

for (const team of app) {
    console.log(team);
}
