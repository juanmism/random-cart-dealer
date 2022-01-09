/* eslint-disable */
import "bootstrap";
import "./style.css";

let icon = ["♦", "♥", "♠", "♣"];

function randomCards() {
  let iconIndex = Math.floor(Math.random() * 4);
  let numberCard = Math.floor(Math.random() * 12 + 1);
  let contentCard = icon[iconIndex];
  if (numberCard < 10 && (iconIndex === 0 || iconIndex === 1)) {
    document.getElementById(
      "xcard"
    ).innerHTML = `<div class="headCard red">${contentCard}</div><div class="bodyCard">${numberCard}</div><div class="footCard red">${contentCard}</div>`;
  }
  if (numberCard < 10 && (iconIndex === 2 || iconIndex === 3)) {
    document.getElementById(
      "xcard"
    ).innerHTML = `<div class="headCard black">${contentCard}</div><div class="bodyCard">${numberCard}</div><div class="footCard black">${contentCard}</div>`;
  }

  if (numberCard === 10 && (iconIndex === 0 || iconIndex === 1)) {
    document.getElementById(
      "xcard"
    ).innerHTML = `<div class="headCard red">${contentCard}J</div><div class="bodyCard">${numberCard}</div><div class="footCard red">J${contentCard}</div>`;
  }
  if (numberCard === 10 && (iconIndex === 2 || iconIndex === 3)) {
    document.getElementById(
      "xcard"
    ).innerHTML = `<div class="headCard black">${contentCard}J</div><div class="bodyCard">${numberCard}</div><div class="footCard black">J${contentCard}</div>`;
  }
  if (numberCard === 11 && (iconIndex === 0 || iconIndex === 1)) {
    document.getElementById(
      "xcard"
    ).innerHTML = `<div class="headCard red">${contentCard}Q</div><div class="bodyCard">${numberCard}</div><div class="footCard red">Q${contentCard}</div>`;
  }
  if (numberCard === 11 && (iconIndex === 2 || iconIndex === 3)) {
    document.getElementById(
      "xcard"
    ).innerHTML = `<div class="headCard black">${contentCard}Q</div><div class="bodyCard">${numberCard}</div><div class="footCard black">Q${contentCard}</div>`;
  }
  if (numberCard === 12 && (iconIndex === 0 || iconIndex === 1)) {
    document.getElementById(
      "xcard"
    ).innerHTML = `<div class="headCard red">${contentCard}K</div><div class="bodyCard">${numberCard}</div><div class="footCard red">K${contentCard}</div>`;
  }
  if (numberCard === 12 && (iconIndex === 2 || iconIndex === 3)) {
    document.getElementById(
      "xcard"
    ).innerHTML = `<div class="headCard black">${contentCard}K</div><div class="bodyCard">${numberCard}</div><div class="footCard black">K${contentCard}</div>`;
  }
}
window.onload = randomCards();

let button = document.querySelector("#button");
button.addEventListener("click", randomCards);

let button2 = document.querySelector("#button2");
button2.addEventListener("click", ActivarTiempo);

let xx;
function ActivarTiempo() {
  xx = setInterval(randomCards, 3000);
  let button3 = document.querySelector("#button3");
  button3.addEventListener("click", PararTiempo);
}

function PararTiempo() {
  clearInterval(xx);
}

const todoList = [];
const button4 = document.querySelector("#button4");

const handelClick = event => {
  event.preventDefault();
  const ancho = document.querySelector("#ancho");
  const alto = document.querySelector("#alto");
  const todoData = {
    ancho: ancho.value,
    alto: alto.value
  };
  todoList.push(todoData);
  console.log(todoList);
  elem.style.height = `${todoList[0].alto}px`;
  elem.style.width = `${todoList[0].ancho}px`;
  ancho.value = "";
  alto.value = "";
  todoList.shift();
};

let elem = document.getElementById("xcard");

button4.addEventListener("click", handelClick);

const resetSize = event => {
  event.preventDefault();
  elem.style.height = `460px`;
  elem.style.width = `280px`;
};
let button5 = document.querySelector("#button5");

button5.addEventListener("click", resetSize);
