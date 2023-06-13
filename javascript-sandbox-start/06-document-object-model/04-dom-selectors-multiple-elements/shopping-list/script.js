//queryselectorAll

const listItems = document.querySelectorAll('.item')
console.log(listItems[1].innerText);

listItems.forEach((item, index) => {
    item.style.color = 'red'
//see traversy code
})

const listItems2 = document.getElementsByClassName('item') //outputs html collection
const listItemsArray = Array.from(listItems2) // convert to array
//listItemsArray.forEach --your code here
