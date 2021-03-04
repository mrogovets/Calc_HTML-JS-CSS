"use strict";

// btn init
const inputDigital = document.querySelector(".input-digital");
const btnAC = document.querySelector(".btn-AC");
const btnPlusMinus = document.querySelector(".btn-plus-minus");
const btnPercent = document.querySelector(".btn-percent");
const btnDivide = document.querySelector(".btn-divide");
const btn7 = document.querySelector(".btn-7");
const btn8 = document.querySelector(".btn-8");
const btn9 = document.querySelector(".btn-9");
const btnMult = document.querySelector(".btn-mult");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");
const btnMinus = document.querySelector(".btn-minus");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btnPlus = document.querySelector(".btn-plus");
const btn0 = document.querySelector(".btn-0");
const btnComa = document.querySelector(".btn-coma");
const btnEquel = document.querySelector(".btn-equel");

let RESULT = null;
let preRESULT = 0;
let operation = null;

let add = (a, b) => {
  if (a === null) {
    a = 0;
  }
  if (b === null) {
    b = 0;
  }
  operation = "add";
  return a + b;
};

let mult = (a, b) => {
  if (a === null) {
    a = 1;
  }
  if (b === null) {
    b = 1;
  }
  operation = "mult";
  return a * b;
};

let divide = (a, b) => {
  if (a === null) {
    a = 1;
  }
  if (b === null) {
    b = 1;
  }
  operation = "divide";
  return a / b;
};

btnAC.addEventListener("click", () => {
  RESULT = preRESULT = 0;
  inputDigital.value = RESULT;
});
btn0.addEventListener("click", () => {
  if ((inputDigital.value = "0")) {
    inputDigital.value = "";
  }
  inputDigital.value += 0;
});
btn1.addEventListener("click", () => {
  if ((inputDigital.value = "0")) {
    inputDigital.value = "";
  }
  inputDigital.value += 1;
});
btn2.addEventListener("click", () => {
  if ((inputDigital.value = "0")) {
    inputDigital.value = "";
  }
  inputDigital.value += 2;
});
btn3.addEventListener("click", () => {
  if ((inputDigital.value = "0")) {
    inputDigital.value = "";
  }
  inputDigital.value += 3;
});
btn4.addEventListener("click", () => {
  if ((inputDigital.value = "0")) {
    inputDigital.value = "";
  }
  inputDigital.value += 4;
});
btn5.addEventListener("click", () => {
  if ((inputDigital.value = "0")) {
    inputDigital.value = "";
  }
  inputDigital.value += 5;
});
btn6.addEventListener("click", () => {
  if ((inputDigital.value = "0")) {
    inputDigital.value = "";
  }
  inputDigital.value += 6;
});
btn7.addEventListener("click", () => {
  if ((inputDigital.value = "0")) {
    inputDigital.value = "";
  }
  inputDigital.value += 7;
});
btn8.addEventListener("click", () => {
  if ((inputDigital.value = "0")) {
    inputDigital.value = "";
  }
  inputDigital.value += 8;
});
btn9.addEventListener("click", () => {
  if ((inputDigital.value = "0")) {
    inputDigital.value = "";
  }
  inputDigital.value += 9;
});
btnComa.addEventListener("click", () => {
  inputDigital.value += ",";
  console.log(inputDigital.value);
});
//-----------------------------
btnPlus.addEventListener("click", () => {
  preRESULT += +inputDigital.value;
  preRESULT = add(preRESULT, RESULT);
  console.log(preRESULT);
});
btnMult.addEventListener("click", () => {
  preRESULT = +inputDigital.value;
  preRESULT = mult(preRESULT, RESULT);
  console.log(preRESULT);
});
btnDivide.addEventListener("click", () => {
  preRESULT = +inputDigital.value;
  preRESULT = divide(preRESULT, RESULT);
  console.log(preRESULT);
});
btnEquel.addEventListener("click", () => {
  switch (operation) {
    case "add":
      RESULT = add(preRESULT, +inputDigital.value);
      break;
    case "mult":
      RESULT = mult(preRESULT, +inputDigital.value);
      break;
    case "divide":
      RESULT = divide(preRESULT, +inputDigital.value);
  }
  inputDigital.value = RESULT;
  console.log(RESULT);
  preRESULT = null;
  RESULT = null;
});
