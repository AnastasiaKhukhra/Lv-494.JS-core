let game = document.getElementById("game");
let leftGameBorder = game.offsetLeft + 10;
let rightGameBorder = game.offsetWidth + leftGameBorder - 90;
let downGameBorder = game.offsetHeight - 70;


function counter() {
  let counter = document.getElementById("points");
  counter.textContent = Number(counter.textContent) + 1;
}


function randomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function setBox() {
  let wrapper = document.querySelector(".wrapper"), 
      box = document.querySelector(".box"), 
      x = 0,
      mousedown = false;
  box.style.left = leftGameBorder + "px";
  box.style.top = downGameBorder - 40 + "px";

  box.addEventListener("mousedown", function (e) { 
    mousedown = true;
    x = box.offsetLeft - e.clientX;
  }, true); 

  box.addEventListener("mouseup", function (e) { 
    mousedown = false; 
  }, true);

  wrapper.addEventListener("mousemove", function (e) { 
    if (mousedown && (e.clientX >= leftGameBorder + 40) && (e.clientX <= rightGameBorder + 20)) {  
      box.style.left = e.clientX + x + "px";
    } 
  }, true); 
}


function generateAnimal() {
  let animal = document.createElement("IMG"),
      image = new Array("miki.png", "cat.png", "mik.png");
  animal.setAttribute("class","animal"); 
  animal.style.left = randomInt(leftGameBorder, rightGameBorder) + "px";
  animal.style.top = -80 + "px";
  animal.setAttribute("src", image[Math.floor(Math.random() * image.length)]);
  document.getElementById("game").appendChild(animal);
}


function changePosition() {
  let animals = document.querySelectorAll(".animal");
  Array.from(animals).forEach((animal) => {
    let positionNumber = Number(animal.style.top.substring(0, animal.style.top.length - 2)); 
    animal.style.top = positionNumber + 1 + "px";

    if (positionNumber == downGameBorder) {
      Array.from(animals).forEach.call(animals, function(animal){
        animal.parentNode.removeChild(animal);
      });
      clearInterval(moving);
      let points = document.getElementById("points").textContent;
      alert(`Your points: ${points}`);
      window.location.reload();
    }
  })
}


function checkForCollision() {
  let box = document.querySelector(".box");
  let rect1 = box.getBoundingClientRect();
  let animals = document.getElementsByClassName("animal");
  Array.from(animals).forEach((animal) => {
    let rect2 = animal.getBoundingClientRect();
    var overlap = !(rect1.right < rect2.left || 
                    rect1.left > rect2.right || 
                    rect1.bottom < rect2.top || 
                    rect1.top > (rect2.bottom - 25))
    if (overlap) {
      counter();
      animal.parentNode.removeChild(animal);
    }

  })
}


function update() {
  changePosition();
  checkForCollision();
}

let moving = setInterval(generateAnimal, 2000);

function start() {
  let start = document.querySelector(".wrapper1");
  setInterval(update, 10);
  moving;
  start.style.display = 'none';
}

button.addEventListener("click", start);


window.onload = setBox;