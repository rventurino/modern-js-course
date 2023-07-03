//quick and dirty
function createListItem(item){
    const li = document.createElement('li')
    li.innerHTML = `${item}
                <button class="remove-item btn-link text-red">
                    <i class="fa-solid fa-xmark"></i>
                </button>`
    document.querySelector('.items').appendChild(li);
}

createListItem('Eggs');

//clean and performant
function createNewItem(item){
    //create li element
    const li = document.createElement('li')
    //add a child text node to it containing the new item
    li.appendChild(document.createTextNode(item))
    //add the button for delete
    const button = document.createElement('button')
    //add the class names for styling the i tag (fontawesome)
    button.className = 'remove-item btn-link text-red'
    //add the i tag
    const icon = document.createElement('i')
    //add the fontawesome class info
    icon.className = 'fa-solid fa-xmark'
    //add the icon element to the button
    button.appendChild(icon)
    //add the button to the li
    li.appendChild(button)
    //add the li to the .items classlist
    document.querySelector('.items').appendChild(li)
}

createNewItem('Cheese')