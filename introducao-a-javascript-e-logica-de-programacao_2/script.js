let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
total = 0;

// for(var i = 0; i < numbers.length; i ++) {
//     console.log(numbers[i]);
// }

// for (var i = 0; i < numbers.length; i += 1) {
//     total += numbers[i];
// }

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


    

