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
const functionsBtn = document.querySelectorAll('.btn-func');
const displayOutput = document.getElementById('display');

let inputNumber = null;
let firstNumber = null;
let secondNumber = null;
let operator = null;
let firstOperator = null;
let secondOperator = null;
let result = null;

displayOutput.value = 0;
function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function persent(a, b) {
  return (a * b) / 100;
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
    case '%' : result = persent(a, b); break;
    default  : break;
  }
  return result;
}

clearBtn.addEventListener('click', () => {
  displayOutput.value = '';  
  inputNumber = null;
  firstNumber = null;
  secondNumber = null;
  operator = null;
});

numbersBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (inputNumber === null || inputNumber === '0' || "Divide by zero!" ) {
      inputNumber = e.target.textContent;
    } else {
      inputNumber += e.target.textContent;
    }
    displayOutput.value = inputNumber;
  });
});

signBtn.addEventListener('click', () => {
  inputNumber = -inputNumber + '';
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
    if (inputNumber == '0.' || inputNumber == '-' || inputNumber == '-0.') {
      inputNumber = '0';
    }
  }
    displayOutput.value = inputNumber;
});

functionsBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    operat = e.target.id;
    console.log('operat ', operat);

    switch(operat) {
      case 'multi'    : operator = '*'; break;
      case 'divide'   : operator = '/'; break;
      case 'subtract' : operator = '-'; break;
      case 'add'      : operator = '+'; break;
      case 'percent'  : operator = '%'; break; 
      default: break;
    }

    if (firstNumber === null || 'Divide by zero!') {
      firstNumber = Number(inputNumber);
    } 
   
    console.log('fN ', firstNumber);
    console.log('sN ', secondNumber);
    console.log('operator ', operator);
    
    inputNumber = null;
    secondNumber = null;
  });
});

function getResult() {
  if (secondNumber === null) {
    secondNumber = Number(inputNumber);
  }
  result = operate(operator, firstNumber, secondNumber);
  displayOutput.value = result;
  firstNumber = result;
  secondNumber = null;
  inputNumber = null;
  console.log('secondNumber ' , secondNumber);
  console.log('firstNumber ', firstNumber);
}

equalBtn.addEventListener('click', () => {
  getResult();
  inputNumber = result;
});
