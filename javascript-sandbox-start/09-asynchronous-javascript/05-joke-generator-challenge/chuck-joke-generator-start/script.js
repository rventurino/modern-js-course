/*
const button = document.querySelector('#joke-btn')
const jokeHTML = document.querySelector('#joke')
const xhr = new XMLHttpRequest();



xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

xhr.onreadystatechange = function () {
    const joke = JSON.parse(this.responseText);
    const p = document.createElement('p');
    p.innerHTML = `${joke.value}`;
    jokeHTML.innerHTML = p;
}

button.addEventListener('click', xhr.send)
*/
const jokeBtn = document.querySelector('#joke-btn')
const jokeEl = document.querySelector('#joke')

const generateJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        // console.log(JSON.parse(this.responseText).value);
        jokeEl.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeEl.innerHTML = 'Something Went Wrong (Not Funny)';
      }
    }
  };

  xhr.send();
};

jokeBtn.addEventListener('click', generateJoke)
document.addEventListener('DOMContentLoaded', generateJoke);