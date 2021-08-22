const { question, questionInt } = require('readline-sync');

function imc(peso, altura) {
  const metros = (altura > 2.5) ? (altura / 100) : altura;
  const total = peso / (metros * metros);
  return total.toFixed(2);
}

const name = question('Qual o seu nome ? ');
const peso = questionInt('Qual o seu peso ? ');
const altura = questionInt('Qual a sua altura ? ');

const total = imc(peso, altura);

console.log(`Olá ${ name }, seu imc é ${ total }`);