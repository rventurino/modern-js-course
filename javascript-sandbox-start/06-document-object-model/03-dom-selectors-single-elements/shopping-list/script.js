//document.getElementById()
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').getAttribute('id'));

//set attributes
document.getElementById('app-title').title = 'shopping list'
document.getElementById('app-title').setAttribute('class', 'title')

//putting selector in var
const title = document.getElementById('app-title')

//get or change content
console.log(title);
title.textContent = 'Hello world'
console.log(title);
title.textContent = 'Hello Again'
title.innerHTML = '<strong>Shopping List</strong>'

//change styles
title.style.color = 'red';

//document.queryselector
console.log(document.querySelector('h1'));//select only first one
