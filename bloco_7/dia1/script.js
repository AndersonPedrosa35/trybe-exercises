const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// Por padrão o sort transforma em string e ordena, o número como string não pode ser comparado por isso acrescentamos essa função que compra os números e base negativa, exemplo 40 - 100 = -60 ou 100 - 40 = 60, ele pega o valor negativo e ordena na forma 40, 100;
oddsAndEvens.sort((a, b) => a - b);
console.log(oddsAndEvens);

function fatorial (number) {
  let soma = number;
  while (number > 2) {
    soma *= number - 1;
    number -= 1;
  }
  return soma;
} 
console.log(fatorial(4));

function maiorPalavra (string) {
  let palavras = string.split(" ");
  let compar = palavras[0];
  for (let index = 0; index < palavras.length; index += 1) {
    if (compar.length < palavras[index].length) {
      compar = palavras[index];
    }
  }
  return compar;
}
console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"))