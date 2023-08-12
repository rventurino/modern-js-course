const sym = Symbol();
const sym1 = Symbol('foo');
const sym2 = Symbol('bar');

console.log(sym, sym1, sym2);
console.log(typeof sym);
console.log(sym1.description);
console.log(sym.description);

//Symbols are unique
console.log(Symbol('sym') === Symbol('sym'));

const user = {
  //id: 1,
  [Symbol('id')]: 1,
  name: 'John Doe',
  email: 'john@gmail.com',
};

//user.id = 2; //will not work, adds id property

console.log(user[Symbol('id')]);

//Symbols are NOT enumerable
console.log(Object.keys(user));
console.log(Object.values(user));

for(let key in user){
    console.log(key);
}

//getownpropertysymbolds
console.log(Object.getOwnPropertySymbols(user));

//Symbol.for()
const sym3 = Symbol.for('foo')
const sym4 = Symbol.for('foo')

console.log(sym3 === sym4);

console.log(Symbol.keyFor(sym3));
console.log(Symbol.keyFor(sym1));

console.log(sym1.toString());
console.log(sym4.toString());
console.log(sym.toString());

console.log(sym1.valueOf());
console.log(sym4.valueOf());
console.log(sym.valueOf());