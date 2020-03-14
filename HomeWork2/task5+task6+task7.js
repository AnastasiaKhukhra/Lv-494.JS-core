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
if ((x >= 5) && (x < 11)) {
    alert("Доброго ранку");
} else if ((x >= 11) && (x < 17)) {
    alert("Доброго дня");
} else if ((x >= 17) && (x < 23)) {
    alert("Доброго вечора");
} else {
    alert("Доброї ночі");
}; */


//TASK 7 METHOD 2

/* switch (new Date().getHours()) {
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
            alert("Доброго ранку");
            break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
            alert("Доброго дня");
            break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
            alert("Доброго вечора");
            break;
    default:
            alert("Доброї ночі");
}; */


