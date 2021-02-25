

// for(var i = 0; i < numbers.length; i ++) {
//     console.log(numbers[i]);
// }

// for (var i = 0; i < numbers.length; i += 1) {
//     total += numbers[i];
// }

// for (var i = 0; i < numbers.length; i += 1) {
//         total += numbers[i];
// }  
// total = total / numbers.length-1;
// if (total > 20) {
//     console.log("Valor maior que 20");
// }
// else {
//     console.log("Valor menos ou igual a 20");
// }

// let comparar = 0;
// for (var i = 0; i < numbers.length; i += 1) {
//     if(numbers[i] > comparar) {
//         comparar = numbers[i];
//     }
        
// }   console.log(comparar);   
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let par = 0; 
for (var i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 == 0) {
        par += 1;
    }
}  console.log(par);
if (par == 0) {
    console.log("Nenhum par");
}
else {
    console.log("Há pares");
}
