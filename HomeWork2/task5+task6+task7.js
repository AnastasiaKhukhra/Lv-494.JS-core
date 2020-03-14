//TASK 5

/* let isAdult = prompt("How olds are you?", "0");

 if (isAdult >= 18) {
    alert ("Ви досягли повнолітнього віку");
} else if ((isAdult >= 10) && (isAdult < 18)) {
    alert ("Ви ще неповнолітні");
} else if ((isAdult >= 0) && (isAdult < 10)) {
    alert ("Ви ще надто молоді");
} else {
    alert ("Введіть ваш вік");
}; */


//TASK 6

/* let sideA = prompt("Enter the first triangle's side", "");
let sideB = prompt("Enter the second triangle's side", "");
let sideC = prompt("Enter the third triangle's side", "");

let a = Number(sideA);
let b = Number(sideB);
let c = Number(sideC);

check = ((a > 0) && (b > 0) && (c > 0) && ((a + b) > c) && ((a + c) > b) && ((c + b) > a)) 
        ? "ok" : alert("Incorrect data");

if (check) {
    p = (a + b + c) * (1 / 2);
    square = (p * (p - a) * (p - b) * (p - c)) ** (1 / 2);
    console.log(square.toFixed(3));

    rightTriangle = ((a ** 2) == (b ** 2) + (c ** 2)) || 
                    ((b ** 2) == (a ** 2) + (c ** 2)) ||
                    ((c ** 2) == (b ** 2) + (a ** 2)) ? true : false;
    console.log("Right Triangle: " + rightTriangle);
}; */


//TASK 7 METHOD 1
/* var x = new Date().getHours();
if ((x >= 23) || (x < 5)) {
    alert("Доброї ночі");
} else if ((x >= 5) || (x < 11)) {
    alert("Доброго ранку");
} else ((x >= 11) || (x < 17)) {
    alert("Доброго дня");
} else {
    alert("Доброго вечора");
}; */


//TASK 7 METHOD 2
/* var x = new Date().getHours();
switch (x) {
    case ((x >= 23) || (x < 5)):
        alert("Доброї ночі");
        break;
    case ((x >= 5) || (x < 11)):
        alert("Доброго ранку");
        break;
    case ((x >= 11) || (x < 17)):
        alert("Доброго ранку");
        break;
    default:
        alert("Доброго вечора");
}; */



