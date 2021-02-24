let a = 5;
let b = 15;
let c = 25;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log((a + b) % 2) == 0;

if (a > b) {
    console.log("A venceu");
}
else {
    console.log("B venceu");
}

switch (true) {
    case a > b && a > c:
        console.log("A é o maior");
        break;

    case b > a && b > c:
        console.log("B é o maior");
        break;

    case c > a && c > b:
        console.log("C é o maior");
        break;
}
switch (true) {
    case a * b + c < 0:
        console.log("Negativo");
        break;

    case a * b + c > 0:
        console.log("Positivo");
        break;

    case a * b + c == 0:
        console.log("Zero");
        break;
}
// Parametros do atan2 > X    Y             Graus
console.log(Math.atan2(233.5, 180) * 180 / Math.PI);

let triangulo = 180;
let hipo;
let cata;
let cate;
triangulo = hipo + cata + cate;
if (triangulo = 180) {
    console.log("Acertou");
}
else {
    console.log("Errou");
}
