// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

function createElement (data) {
  let para = document.querySelector('h2');
  return para.innerHTML = data;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json()).then((data) => createElement(data.joke));
};

window.onload = () => fetchJoke();

const promise = new Promise((resolve, reject) => {
let array = [1, 3, 5, 6, 7, 8, 9, 12, 34, 20];
});
