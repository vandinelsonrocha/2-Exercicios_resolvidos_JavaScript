let botão1 = document.getElementById('botao1')
let botão2 = document.getElementById('botao2')

botão1.addEventListener('click', clicar)
botão2.addEventListener('click', limpar)

let result = document.querySelector('p#res')
let contador = 1
function clicar()  {
    result.innerHTML += `Foi gerado o número <strong>${contador}</strong><br>`
    contador ++
}

function limpar()  {
    result.innerHTML = ""
    contador = 1
}