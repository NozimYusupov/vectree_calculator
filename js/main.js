const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const addBtn = document.getElementById('add');
const substractBtn = document.getElementById('substract');
const equalBtn = document.getElementById('equal');
const signBtn = document.getElementById('sign');
const backspaceBtn = document.getElementById('backspace');
const clearBtn = document.getElementById('clear');
const percentBtn = document.getElementById('percent');
const numbersBtn = document.querySelectorAll('.btn-number');
const pointBtn = document.getElementById('point');
const functionsBtn = document.querySelectorAll('btn-function');
const displayOutput = document.getElementById('display');

let inputNumber = null;


function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  }
  return "Divide by zero!"
}

function operate(operator, a, b) {
  let result = null;
  switch (operator) {
    case '+' : result = add(a, b); break;
    case '-' : result = substract(a, b); break;
    case '*' : result = multiply(a, b); break;
    case '/' : result = divide(a, b); break;
    default  : break;
  }
  return result;
}

clearBtn.addEventListener('click', () => {
  displayOutput.value = '';  
  inputNumber = null;
});

numbersBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (inputNumber === null || inputNumber === '0') {
      inputNumber = e.target.textContent;
    } else {
      inputNumber += e.target.textContent;
    }
    displayOutput.value = inputNumber;
  });
});

signBtn.addEventListener('click', () => {
  inputNumber = -inputNumber;
  displayOutput.value = inputNumber;
});

pointBtn.addEventListener('click', (e) => {
  if (inputNumber === null) {
    inputNumber = 0 + e.target.textContent;
    displayOutput.value = inputNumber;
    
  } 
  if (inputNumber.includes('.')) {
    return;
  } else {
    inputNumber += e.target.textContent;
    displayOutput.value = inputNumber;
  }
});

backspaceBtn.addEventListener('click', () => {
  if (inputNumber === null || inputNumber.length <= 1 ) {
    inputNumber = '0';
  } else {
    inputNumber = inputNumber.slice(0, -1);
    if (inputNumber == '0.') {
      inputNumber = '0';
    }
  }
    displayOutput.value = inputNumber;
});
