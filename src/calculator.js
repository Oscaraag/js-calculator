const calculator = () =>
  EquiOperator.addEventListener('click', () => {
    const supernumber = () => {
      let renderoperation = eval(screenNumbers.textContent)

      if (renderoperation % 1 == 0) {
        let text = document.createTextNode(renderoperation)
        let LastOperation = document.createTextNode(
          `${screenNumbers.textContent}  || `
        )
        requestOperation.appendChild(LastOperation)
        screenNumbers.textContent = ''
        screenNumbers.appendChild(text)
      } else {
        let text = document.createTextNode(renderoperation.toFixed(2))
        let LastOperation = document.createTextNode(
          `${screenNumbers.textContent}  || `
        )
        requestOperation.appendChild(LastOperation)
        screenNumbers.textContent = ''
        screenNumbers.appendChild(text)
      }
    }
    supernumber()
  })

export default calculator
