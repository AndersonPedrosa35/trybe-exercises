

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

// Array = Conjunto de variaveis;
// maior valor do Array;
// if, for, math.max
let comparar = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (var i = 0; i < numbers.length; i += 1) {
    if(numbers[i] > comparar) {
        comparar = numbers[i];
    }
        
}   console.log(comparar);    

