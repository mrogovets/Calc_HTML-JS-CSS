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
let operation = null;
let prevOperation = null;
let operand1 = null;
let operand2 = null;
let operand1Stop = false;
inputDigital.value = "0";

let sum = (a, b) => {
  a = Number(a);
  b = Number(b);
  return a + b;
};

let mult = (a, b) => {
  a = Number(a);
  b = Number(b);
  return a * b;
};

let minus = (a, b) => {
  a = Number(a);
  b = Number(b);
  return a - b;
};

let divide = (a, b) => {
  a = Number(a);
  b = Number(b);
  return a / b;
};

const setData = (btnNumber) => {
  if (!operand1) {
    operand1 = inputDigital.value;
    console.log("operand1", operand1);
    console.log("operand1Stop", operand1Stop);
  } else {
    if (!operand1Stop && !operand2) {
      operand1 = Number(RESULT);
      console.log("operand1", operand1, "operand2", operand2);
      console.log("operand1Stop", operand1Stop);
    }
    if (operation) {
      if (!operand2) {
        console.log("operand2 empty");
        inputDigital.value = btnNumber;
        operand2 = inputDigital.value;
        console.log("operand2", operand2);
      } else {
        operand2 = inputDigital.value;
        console.log("operand2", operand2);
      }
    }
  }
  console.log(inputDigital.value);
};

btnAC.addEventListener("click", () => {
  RESULT = 0;
  operand1 = operand2 = null;
  operation = null;
  inputDigital.value = RESULT;
});

btn1.addEventListener("click", () => {
  if (inputDigital.value === "0") {
    inputDigital.value = "";
  }

  if (operand1 && !operand2) {
    inputDigital.value = "";
  }

  inputDigital.value = inputDigital.value + "1";
  const btnNumber = 1;
  setData(btnNumber);
});

btn2.addEventListener("click", () => {
  if (inputDigital.value === "0") {
    inputDigital.value = "";
  }

  if (operand1 && !operand2) {
    inputDigital.value = "";
  }

  inputDigital.value = inputDigital.value + "2";
  const btnNumber = 2;
  setData(btnNumber);
});

btn3.addEventListener("click", () => {
  if (inputDigital.value === "0") {
    inputDigital.value = "";
  }

  if (operand1 && !operand2) {
    inputDigital.value = "";
  }

  inputDigital.value = inputDigital.value + "3";
  const btnNumber = 3;
  setData(btnNumber);
});

btn4.addEventListener("click", () => {
  if (inputDigital.value === "0") {
    inputDigital.value = "";
  }

  if (operand1 && !operand2) {
    inputDigital.value = "";
  }

  inputDigital.value = inputDigital.value + "4";
  const btnNumber = 4;
  setData(btnNumber);
});

btn5.addEventListener("click", () => {
  if (inputDigital.value === "0") {
    inputDigital.value = "";
  }

  if (operand1 && !operand2) {
    inputDigital.value = "";
  }

  inputDigital.value = inputDigital.value + "5";
  const btnNumber = 5;
  setData(btnNumber);
});

btn6.addEventListener("click", () => {
  if (inputDigital.value === "0") {
    inputDigital.value = "";
  }

  if (operand1 && !operand2) {
    inputDigital.value = "";
  }

  inputDigital.value = inputDigital.value + "6";
  const btnNumber = 6;
  setData(btnNumber);
});

btn7.addEventListener("click", () => {
  if (inputDigital.value === "0") {
    inputDigital.value = "";
  }

  if (operand1 && !operand2) {
    inputDigital.value = "";
  }

  inputDigital.value = inputDigital.value + "7";
  const btnNumber = 7;
  setData(btnNumber);
});

btn8.addEventListener("click", () => {
  if (inputDigital.value === "0") {
    inputDigital.value = "";
  }

  if (operand1 && !operand2) {
    inputDigital.value = "";
  }

  inputDigital.value = inputDigital.value + "8";
  const btnNumber = 8;
  setData(btnNumber);
});

btn9.addEventListener("click", () => {
  if (inputDigital.value === "0") {
    inputDigital.value = "";
  }

  if (operand1 && !operand2) {
    inputDigital.value = "";
  }

  inputDigital.value = inputDigital.value + "9";
  const btnNumber = 9;
  setData(btnNumber);
});

btn0.addEventListener("click", () => {
  if (inputDigital.value === "0") {
    inputDigital.value = "";
  }

  if (operand1 && !operand2) {
    inputDigital.value = "";
  }

  inputDigital.value = inputDigital.value + "0";
  const btnNumber = 0;
  setData(btnNumber);
});
//-----------------------------
btnPlus.addEventListener("click", () => {
  operation = "sum";
  if (!prevOperation) {
    prevOperation = operation;
  }
  if (operation === prevOperation) {
    operand1Stop = true;
    if (operand1 && operand2) {
      inputDigital.value = "";
      RESULT = sum(operand1, operand2);
      operand1 = Number(RESULT);
      inputDigital.value = RESULT;
      operand2 = null;
      // operation = null;
      console.log("RESULT", RESULT);
    }
  } else {
    console.log("!operation", prevOperation);
    console.log("operand1", operand1);
    console.log("operand2", operand2);
    //--------------
    switch (prevOperation) {
      case "sum":
        inputDigital.value = "";
        RESULT = sum(operand1, operand2);
        operand1 = Number(RESULT);
        inputDigital.value = RESULT;
        operand2 = null;
        // operation = null;
        console.log("RESULT", RESULT);
        break;
      case "minus":
        inputDigital.value = "";
        RESULT = minus(operand1, operand2);
        operand1 = Number(RESULT);
        inputDigital.value = RESULT;
        operand2 = null;
        // operation = null;
        console.log("RESULT", RESULT);
        break;
    }
    //--------------
    prevOperation = operation;
    operand1Stop = false;
    operand2 = null;
  }
  console.log("operand1", operand1);
  console.log("operand2", operand2);
});

btnMinus.addEventListener("click", () => {
  operation = "minus";
  if (!prevOperation) {
    prevOperation = operation;
  }
  if (operation === prevOperation) {
    operand1Stop = true;
    if (operand1 && operand2) {
      inputDigital.value = "";
      RESULT = minus(operand1, operand2);
      operand1 = Number(RESULT);
      inputDigital.value = RESULT;
      operand2 = null;
      // operation = null;
      console.log("RESULT", RESULT);
    }
  } else {
    console.log("!operation", prevOperation);
    console.log("operand1", operand1);
    console.log("operand2", operand2);
    //--------------
    switch (prevOperation) {
      case "sum":
        inputDigital.value = "";
        RESULT = sum(operand1, operand2);
        operand1 = Number(RESULT);
        inputDigital.value = RESULT;
        operand2 = null;
        // operation = null;
        console.log("RESULT", RESULT);
        break;
      case "minus":
        inputDigital.value = "";
        RESULT = minus(operand1, operand2);
        operand1 = Number(RESULT);
        inputDigital.value = RESULT;
        operand2 = null;
        // operation = null;
        console.log("RESULT", RESULT);
        break;
    }
    //--------------
    prevOperation = operation;
    operand1Stop = false;
    operand2 = null;
  }
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
    case "minus":
      RESULT = minus(preRESULT, +inputDigital.value);
  }
  inputDigital.value = RESULT;
  console.log(RESULT);
  preRESULT = null;
  RESULT = null;
});
