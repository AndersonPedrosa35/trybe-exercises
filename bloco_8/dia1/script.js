// const wakeUp = () => console.log('Acordando!!');
// const eatBreakFast = () => console.log('Bora tomar café');
// const sleep = () => console.log('Hora de dormir');
// function doingThings (action) {
//   action()
// }
// doingThings(sleep);
// console.log(" \n");
// console.log('===================================================================');
// console.log(" \n");

// let id = {};
// const register = (nome) => ({
//   nomeCompleto: nome,
//   email: nome.toLowerCase().split(' ').join('_') + '@trybe.com',
// });
// function newEmployees (register) {
//   const usuarios = {
//     id1: register("Anderson pedrosa"),
//     id2: register("Daniel CArlos"),
//     id3: register("Antonio Pedrosa")
//   }
//   console.log(usuarios);
// } newEmployees(register);

// const check = (num1, num2) => num1 === num2;

// function randomSorteio (num1, check) {
//   const sorteio = Math.ceil(Math.random() * 5);
//   console.log(sorteio);
//   if (check(num1, sorteio)) {
//     console.log('Parabéns você ganhou');
//   } else {
//     console.log('Tente novamente');
//   }
// } randomSorteio( 3, check);

// const curring = (resposta) => {
//   return (gabarito) => {
//     return resposta.toLowerCase() === gabarito.toLowerCase();
//   }
// }
//  console.log(curring("ala")('ala'))
 
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'C', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const check = (gabarito, respostas) => {
  let count = 0;
  for (let index in gabarito) {
    if (gabarito[index] === respostas[index]) {
      count += 1;
    } else if (gabarito[index] === respostas[index]) {
     count -= 0.5;
    } else {
       'N.A';
    }
  }
  return count;
}
const quiz = (gabarito) => {
  gabarito;  
  return (respostas) => {
    respostas;
    return (check) => console.log(check(gabarito, respostas));
  }
}; quiz(rightAnswers)(studentAnswers)(check);