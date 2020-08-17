const screen = document.getElementById('screen'),
  lastoperation = document.getElementById('operation')

let operationStatus = false,
  firstNumber,
  typeoperation,
  typeOperator

screen.textContent = '0'

const renderNumbers = (number) => {
  screen.textContent === '0' || operationStatus === true
    ? (screen.textContent = number)
    : number === '.' && !screen.textContent.includes('.')
    ? (screen.textContent += number)
    : number !== '.'
    ? (screen.textContent += number)
    : null
  operationStatus = false
}

const getOperation = (element, operation) => {
  operationStatus = true
  firstNumber = Number(screen.textContent)
  typeoperation = operation
  typeOperator = element.textContent
  screen.textContent = element.textContent
}

const orderOperation = (operation) => {
  const makeOperation = (firstNumber, typeoperation) => {
    const secondNumber = Number(screen.textContent)
    lastoperation.textContent = `${firstNumber} ${typeOperator} ${secondNumber}`
    let result
    switch (typeoperation) {
      case 'sum':
        const sum = firstNumber + secondNumber
        result = sum

        break
      case 'multiplier':
        const multiplier = firstNumber * secondNumber
        result = multiplier
        break
      case 'subtraction':
        const subtraction = firstNumber - secondNumber
        result = subtraction
        break
      case 'divide':
        const divide = firstNumber / secondNumber
        result = divide.toFixed(2)
        break

      default:
        break
    }
    result === 'Infinity'
      ? (screen.textContent = 'error :/')
      : (screen.textContent = result)
  }

  if (operation === 'clear') {
    screen.textContent = '0'
    lastoperation.textContent = ''
  } else {
    makeOperation(firstNumber, typeoperation)
  }
  operationStatus = true
}
export { renderNumbers, getOperation, orderOperation }
