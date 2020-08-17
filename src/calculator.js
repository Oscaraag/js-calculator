const screen = document.getElementById('screen'),
  keys = document.getElementById('calclator-container')

const calculator = () => {
  if (!keys) return
  keys.addEventListener('click', (e) => {
    const t = e.target,
      d = t.dataset

    if (d.number) console.log(d.number)
  })
}

export default calculator
