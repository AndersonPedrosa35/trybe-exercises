// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
//   recorrente: "Sim",
// };

// let info2 = {
//   personagem: "Tio Patinhas",
//   origem: "Christmas on Bear Mountain",
//   nota: "O último MacPatinhas",
//   recorrente: "Sim",
// };
// console.log(`Seja bem-vinda ${info.personagem}`);
// console.log(info);
// for (let propries in info && info2) {
//    if(info[propries] === "Sim" && info2[propries] === "Sim") {
//      console.log("Ambos recorrentes");
//    } else {
//      console.log(info[propries] + " e " + info2[propries]);
//    }
//   }

//---------------------------------

// function verificaPalindrome(string) {
//   let palindrome = 'arara';
//   if (string == palindrome) {
//     return true;
//   }else {
//     return false;
//   }
// }
// console.log(verificaPalindrome("desenvolvedor"))
let array = [2, 3, 6, 7, 10, 1];

function verificaArray(array) {
  let indiceMaiorValor = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[indiceMaiorValor] < array[index]) {
      indiceMaiorValor = index;
    }
  }
  return indiceMaiorValor;
}
console.log(verificaArray(array))