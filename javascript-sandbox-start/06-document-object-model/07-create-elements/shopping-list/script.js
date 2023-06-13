const div = document.createElement('div')
div.className = 'my-element'
div.id = 'my-element'
div.setAttribute('title', 'My Element')
//div.innerText - 'Hello World' //inner text is made to change the text of an existing element
// it is better practice to add a text node and append it to the element

const text = document.createTextNode('Hello World')
div.appendChild(text)
console.log(div);

document.body.appendChild(div)
document.querySelector('ul').appendChild(div)