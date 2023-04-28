/* eslint-disable indent */
/* eslint-disable quotes */
"use strict";

const btnNumber = document.querySelectorAll(".js-btn");
const btnOperation = document.querySelectorAll(".js-btnOperation");
const btnSame = document.querySelector(".js-btnSame");
const btnDelete = document.querySelector(".js-btnDelete");
const account = document.querySelector(".js-account");
let result = document.getElementById("result");
let currentOperation = "";
let previousOperation = "";
let operation = undefined;

btnNumber.forEach(function (button) {
  button.addEventListener("click", function () {
    addNumber(button.innerText);
  });
});

btnOperation.forEach(function (button) {
  button.addEventListener("click", function () {
    selectOperacion(button.innerText);
  });
});

btnSame.addEventListener("click", function () {
  calculation();
  updateResult();
});
btnDelete.addEventListener("click", function () {
  clear();
  updateResult();
});

function selectOperacion(op) {
  if (currentOperation === "") {
    return;
  } else {
    calculation();
  }
  operation = op.toString();
  previousOperation = currentOperation;
  currentOperation = "";
}

function calculation() {
  let solution;
  const first = parseFloat(previousOperation);
  const second = parseFloat(currentOperation);
  // if (isNaN(anterior) || isNaN(actual)) return;
  switch (operation) {
    case "+":
      solution = first + second;
      break;
    case "-":
      solution = first - second;
      break;
    case "/":
      solution = first / second;
      break;
    case "x":
      solution = first * second;
      break;
    default:
      return;
  }
  account.innerHTML = `${first} ${operation} ${second} = `;
  currentOperation = solution;
  operation = undefined;
  previousOperation = "";
}

function addNumber(num) {
  currentOperation = currentOperation.toString() + num.toString();
  updateResult();
}

// reinicia la calculadora
function clear() {
  currentOperation = "";
  previousOperation = "";
  operation = undefined;
  account.innerHTML = "0";
}

function updateResult() {
  result.value = currentOperation;
}
