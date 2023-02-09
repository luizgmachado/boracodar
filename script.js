const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear()
  }

  appendNumber(number) {
    this.currentOperand = `${this.currentOperand}${number.toString()}`
  }


  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  updateDisplay() {
    this.previousOperandTextElement.innerText = this.previousOperand;
    this.currentOperandTextElement.innerText = this.currentOperand;

  }
}

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
)

for (const numberButton of numberButtons) {
  numberButton.addEventListener('click', () => {
    calculator.appendNumber(numberButton.innerText)
    calculator.updateDisplay()
  })
}

allClearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
})