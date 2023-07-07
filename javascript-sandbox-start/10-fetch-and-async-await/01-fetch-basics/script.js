// fetch("./movies.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//condensed version using implicit returns
fetch('./movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

//Fetch txt file
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

//condensed version using implicit returns
fetch('https://api.github.com/users/rventurino')
  .then((response) => response.json())
  .then((data) => (document.querySelector('h1').textContent = data.login));
