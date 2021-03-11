

    for(var i = 0; i < numbers.length; i ++) {
        console.log(numbers[i]);
    }

    for (var i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }

    for (var i = 0; i < numbers.length; i += 1) {
            total += numbers[i];
    }  
    total = total / numbers.length-1;
    if (total > 20) {
        console.log("Valor maior que 20");
    }
    else {
        console.log("Valor menos ou igual a 20");
    }

   
    let comparar = 0;
    for (var i = 0; i < numbers.length; i += 1) {
        if(numbers[i] > comparar) {
            comparar = numbers[i];
        }
            
    }   console.log(comparar);   

let par = 0; 
// for (var i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 == 0) {
//         par += 1;
//     }
// }  console.log(par);
// if (par == 0) {
//     console.log("Nenhum par");
// }
// else {
//     console.log("Há pares");
// }
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let comparar = 100;
// for (var i = 0; i < numbers.length; i += 1) {
//     if(numbers[i] < comparar) {
//         comparar = numbers[i];
//     }
        
}   console.log(comparar);   
let array = [];
let divisao;
let total = []
for (var i = 0; i <= 25; i += 1){
    array.push([i]);
    divisao = [i] / 2;
    total.push(divisao);
}   console.log(array, total);