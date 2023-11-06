//variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnPlay = document.querySelector(".btn-play")
const btnReset = document.querySelector(".btn-reset")
const inputId = document.querySelector("#inputNumber")
let xTentativas = 1

//eventos
btnPlay.addEventListener("click", handPlay)
btnReset.addEventListener("click", resetJogo)

//funcoes
function trocaTela() {
  screen1.classList.toggle("hidden")
  screen2.classList.toggle("hidden")
}

//funcopes
function resetJogo() {
  trocaTela()
  inputId.style.border = "2px solid transparent"
  xTentativas = 1
}

function handPlay(e) {
  e.preventDefault()
  let numeroRandom = Math.round(Math.random() * 20)

  if (Number(inputId.value) == numeroRandom) {
    trocaTela()
    document.querySelector(".tentativas").innerHTML = xTentativas
  }
  inputId.style.border = "2px solid #ff4b2b"

  inputId.value = ""
  xTentativas++
}
