let output

output = document.all[12]
output = document.all.length

output = document.documentElement
output = document.body
output = document.head.children //returns first child element of selected element

output = document.URL //domain + page
output = document.characterSet
output = document.contentType

output = document.forms
output = document.forms[0]
output = document.forms[0].method //always outputs "get" unless you set it 
output = document.forms[0].action 

output = document.images
output = document.images[0]
output = document.images[0].src

const forms = Array.from(document.forms)
forms.forEach((form) => console.log(form))

console.log(output);