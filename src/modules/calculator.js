import {
  renderNumbers,
  getOperation,
  orderOperation,
} from './calculatorMethods.js'

const keys = document.getElementById('calculator-container')

screen.textContent = '0'

const calculator = () => {
  if (!keys) return
  keys.addEventListener('click', (event) => {
    const element = event.target,
      data = element.dataset

    if (data.number) renderNumbers(data.number)

    if (data.math) getOperation(element, data.math)

    if (data.operation) orderOperation(data.operation)
  })
}

export { calculator }
