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

// window.onload = () => fetchJoke();

function soma (array, resolve, reject) {
  let soma = array.reduce((acc, number) => acc + number);
  if (soma < 800) {
    let arr = [...soma, ...soma, ...soma, ...soma];
    return resolve(soma);
  }
  return reject(soma);
}

const promise = new Promise((resolve, reject) => {
let array = [1, 3, 5, 6, 7, 8, 9, 12, 34, 20];
soma(array, resolve, reject);
})
.then((soma) => console.log(`N = ${soma} Sua promisse passou! =)`))
.catch((soma) => console.log(`N = ${soma} Fracassado! =(`));
