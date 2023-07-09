const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  fetch(apiURL + '?_limit=5')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(todo.title));
        div.setAttribute('data-id', todo.id)
        if (todo.completed) {
          div.classList.add('done');
        }
        document.getElementById('todo-list').appendChild(div);
      });
    });
};

//leave off video 128: Typicode todos mini project, 8:43

getTodos();
