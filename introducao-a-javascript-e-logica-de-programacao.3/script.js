// let valorN = 5;
// let asterisco = [];
// for (var line = 0; line < valorN; line += 1) {
//     asterisco += "*";      
// }

// for (var column = 0; column < valorN; column += 1) {
//     console.log(asterisco);
// }
// let soma = "";
// for (var column = 0; column< valorN; column += 1) {
//      soma = "*" + soma;
//     console.log(soma);
// }

let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};