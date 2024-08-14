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
const resultOutput = document.getElementById('result');
const expressionOutput = document.getElementById('expression');

let inputNumber = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';
let operation = false;
let oper = '';

resultOutput.value = 0;
expressionOutput.value = 0;

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
  result = 0;
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
  resultOutput.value = '';  
  expressionOutput.value = '';
  inputNumber = '';
  firstNumber = '';
  secondNumber = '';
  operator = '';
  oper = '';
  operation = false;
});

signBtn.addEventListener('click', () => {
  inputNumber = -inputNumber + '';
  expressionOutput.value = inputNumber;
});

pointBtn.addEventListener('click', (e) => {
  if (inputNumber === '') {
    inputNumber = 0 + e.target.textContent;
    expressionOutput.value = inputNumber;
    
  } 
  if (inputNumber.includes('.')) {
    return;
  } else {
    inputNumber += e.target.textContent;
    expressionOutput.value = inputNumber;
  }
});

backspaceBtn.addEventListener('click', () => {
  if (inputNumber === '' || inputNumber.length <= 1 ) {
    inputNumber = '0';
  } else {
    inputNumber = inputNumber.slice(0, -1);
    if (inputNumber == '0.' || inputNumber == '-' || inputNumber == '-0.') {
      inputNumber = '0';
    }
  }
    expressionOutput.value = inputNumber;
});

numbersBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let number = e.target.textContent;
    
    if (inputNumber === '' || inputNumber === '0' || result === "Divide by zero!" ) {
      inputNumber = number;
      firstNumber = inputNumber;
      expressionOutput.value = firstNumber;
    } else 
    
    if (secondNumber === '' && oper === '') {
      inputNumber += number;
      firstNumber = inputNumber;
      console.log(`firstNumber ${firstNumber}`);
      expressionOutput.value = firstNumber;
    } else {
      secondNumber = secondNumber + number;
      inputNumber = secondNumber;
      console.log(`secondNumber ${secondNumber}`);
      expressionOutput.value = firstNumber + operator + secondNumber;
    }
  });
});


functionsBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const operat = e.target.id;
    
    switch(operat) {
      case 'multi'    : operator = '*'; break;
      case 'divide'   : operator = '/'; break;
      case 'subtract' : operator = '-'; break;
      case 'add'      : operator = '+'; break;
      case 'percent'  : operator = '%'; break; 
    }
    if (oper === operator) return;

    if (firstNumber !== '' && secondNumber !== '' && oper !== '') {
      console.log(`first ${firstNumber} second ${secondNumber}`);
      getResult();
      console.log(`first ${firstNumber} second ${secondNumber}`);
      operation = true;
      oper = operator;
      resultOutput.value = result;
      secondNumber = '';
      expressionOutput.value = result + operator;
    } else {
      oper = operator;
      expressionOutput.value = firstNumber + oper;
    }
  });
});

function getResult() {
  console.log('first = ', firstNumber, 'second = ', secondNumber);
  firstNumber = +firstNumber; 
  secondNumber = +secondNumber;
  result = operate(oper, firstNumber, secondNumber);
  firstNumber = result;
  secondNumber = '';
}

equalBtn.addEventListener('click', () => {
  getResult();
  operation = true;
  resultOutput.value = result;
  oper = '';
  secondNumber = '';
});
