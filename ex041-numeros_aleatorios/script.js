let botão1 = document.getElementById('botao1')
let botão2 = document.getElementById('botao2')

botão1.addEventListener('click', clicar)
botão2.addEventListener('click', limpar)

let result = document.querySelector('p#res')
function clicar()  {
    let min = 1
    let max = 100
    let numAleatorio = Math.random() /*função que retorna um número real aleatório entre 0 e 1*/
    let numGerado = min + Math.trunc(max*numAleatorio) /*Math.trunc()-retorna a parte inteira de um número excluindo a parte decimal/fracionária*/
    result.innerHTML += `<p>Foi gerado o número <mark>${numGerado}</mark><br></p>`
}

function limpar()  {
    result.innerHTML = ""
}