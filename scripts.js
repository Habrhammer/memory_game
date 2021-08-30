class Fruits {
  constructor(fruit, srcImg, altImg) {
    this.fruit = fruit;
    this.srcImg = srcImg;
    this.altImg = altImg;
  }
}
let arrFruit = [];

function addFruits(fruit, srcImg, altImg) {
  arrFruit.push(new Fruits(fruit, srcImg, altImg));
}

addFruits("avocado", "img/авокадо.jpg", "Avocado");
addFruits("pineapple", "img/ананас.jpg", "Pineapple");
addFruits("orange", "img/апельсин.jpg", "Orange");
addFruits("banana", "img/банан.jpg", "Banana");
addFruits("grape", "img/виноград.jpg", "Grape");
addFruits("garnet", "img/гранат.jpg", "Garnet");
addFruits("grapefruit", "img/грейпфрут.jpg", "Grapefruit");
addFruits("pear", "img/груша.jpg", "Pear");
addFruits("guava", "img/гуава.jpg", "Guava");
addFruits("kiwi", "img/киви.jpg", "Kiwi");
addFruits("lime", "img/лайм.jpg", "Lime");
addFruits("mango", "img/манго.jpg", "Mango");
addFruits("peach", "img/персик.jpg", "Peach");
addFruits("plum", "img/слива.jpg", "Plum");
addFruits("persimmon", "img/хурма.jpg", "Persimmon");
addFruits("apple", "img/яблоко.jpg", "Apple");

let template = function () {
  for (let i = 0; i < arrFruit.length; i++) {
    let cardDiv = document.createElement("div");
    let frontImg = document.createElement("img");
    let backImg = document.createElement("img");

    let sec = document.querySelector("section");

    sec.appendChild(cardDiv);
    cardDiv.appendChild(frontImg);
    cardDiv.appendChild(backImg);
    cardDiv.className = "card";
    cardDiv.dataset.fruit = arrFruit[i].fruit;
    frontImg.className = "front-face";
    frontImg.src = arrFruit[i].srcImg;
    frontImg.alt = arrFruit[i].altImg;
    backImg.className = "back-face";
    backImg.src = "img/Back.png";
    backImg.alt = "Back";
  }
};
template();
template();

let section = document.querySelector(".game");

section.addEventListener("click", flipCard);

const cards = document.querySelectorAll(".card");

(function toRandomize() {
  for (var i = 0; i < cards.length; i++) {
    let randomizeValue = Math.floor(Math.random() * 32);
    cards[i].style.order = randomizeValue;
  }
})();

let arr = [];
function flipCard(e) {
  e.target.parentElement.classList.add("flip");
  arr.push(e.target.parentElement);

  if (arr.length == 2) {
    deleteCards();
  }
  if (arr.length === 3) {
    arr[0].classList.remove("flip");
    arr[1].classList.remove("flip");
    arr = arr.slice(2);
  }

  console.log(arr);

  toCount();
  result();
}

function deleteCards() {
  if (arr[0].dataset.fruit === arr[1].dataset.fruit) {
    arr[0].classList.add("invisible");
    arr[1].classList.add("invisible");
  }
}

function returnCards() {}

let steps = 0;

function toCount() {
  for (var i = 0; ; i++) {
    if (arr.length == 2) {
      steps += i + 1;
      break;
    }
    return;
  }
  console.log(steps);
}

let endgameWindow = document.querySelector(".endgame");
let textWindow = document.querySelector("strong");
function result() {
  let flipcard = document.querySelectorAll(".invisible");
  if (flipcard.length === 32) {
    endgameWindow.style.display = "block";
  }
  textWindow.textContent = steps;
}

let restart = document.querySelector(".restart_img");
restart.addEventListener("click", function () {
  window.location.reload();
});
