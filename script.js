let Contador = 0
let rodando = false
let intervalo

const Numero = document.querySelector(".Contador")

const btnDecrement = document.querySelector(".Decrement")
const btnIncrement = document.querySelector(".Increment")
const btnReset = document.querySelector(".Reset")
const btnAutoincrement = document.querySelector(".Autoincrement")
const btnAutodecrement = document.querySelector(".Autodecrement")

const valorSalvo = localStorage.getItem("Contador")

if (valorSalvo !== null) {
  Contador = Number(valorSalvo)
  Numero.textContent = Contador
}

btnIncrement.addEventListener("click", () => {
  Contador++

  Numero.textContent = Contador
  localStorage.setItem("Contador", Contador)
})

btnDecrement.addEventListener("click", () => {
  Contador--

  Numero.textContent = Contador
  localStorage.setItem("Contador", Contador)
})

btnReset.addEventListener("click", () => {
  Contador = 0

  Numero.textContent = Contador
  localStorage.setItem("Contador", Contador)
})

btnAutoincrement.addEventListener("click", () => {
  
  if(!rodando){

    intervalo = setInterval(()=> {
      Contador++
      Numero.textContent = Contador
      localStorage.setItem("Contador", Contador)
    }, 500)
    rodando = true

  } else {
    clearInterval(intervalo)
    rodando = false
  }

})


btnAutodecrement.addEventListener("click", () => {

  if (!rodando) {

    intervalo = setInterval(() => {
      Contador--
      Numero.textContent = Contador
      localStorage.setItem("Contador", Contador)
    }, 500);

    rodando = true
  }else {
    clearInterval(intervalo)
    rodando = false
  }

})
