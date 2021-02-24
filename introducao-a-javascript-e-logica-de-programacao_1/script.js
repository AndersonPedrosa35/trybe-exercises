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
