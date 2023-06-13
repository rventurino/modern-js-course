// get child elements
let output;
const parent = document.querySelector('.parent')

output = parent.children
output = parent.children[1].innerText;

parent.children[1].innerText = 'yo dog'

parent.firstElementChild.innerText = 'first element child'
parent.lastElementChild.innerText = 'last element child'
console.log(output);

const child = document.querySelector('.child')

output = child.parentElement
console.log(output);
child.parentElement.style.border = '1px solid #ccc'

//sibling elements 
const secondItem = document.querySelector('.child:nth-child(2)')
output = secondItem
output = secondItem.nextElementSibling
console.log(output);
