let Contador = 0

const numero = document.querySelector(".Contador")

const btnDecrement = document.querySelector(".Decrement")
const btnIncrement = document.querySelector(".Increment")
const btnReset = document.querySelector(".Reset")


btnDecrement.addEventListener ("click", () => {
  Contador--
  numero.textContent = Contador
})

btnIncrement.addEventListener("click", () => {
  Contador++
  numero.textContent = Contador
})

btnReset.addEventListener("click", () => {
  Contador = 0
  numero.textContent = Contador
})