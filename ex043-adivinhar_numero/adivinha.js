let num = document.getElementById('num')
let result = document.getElementById('res')
let adivinhar = document.getElementById('but')
adivinhar.addEventListener('click', tentaAdivinhar)

function tentaAdivinhar()  {
    let numAleatorio = Math.random()
    let numSistema = 1 + Math.trunc(100*numAleatorio)
    let numero = Number(num.value)

    if(document.getElementById('num').value.length == "")  {
        result.innerHTML = `<p>Você precisa digitar um número!</p>`
    } else if(numero<=0 || numero>100)  {
        result.innerHTML = `<p>Digite um número entre 1 e 100!</p>`
    } else if(numero < numSistema)  {
        result.innerHTML = `<p>Você digitou ${numero}. O número do sistema é <strong>MAIOR</strong>, tente adivinhar novamente! NÚMERO SISTEMA = ${numSistema}</p>`
    } else if(numero == numSistema)  {
        result.innerHTML = `<p>Você digitou ${numero}. O número do sistema é <strong>IGUAL</strong>, parabéns! NÚMERO SISTEMA = ${numSistema}</p>`
    } else  {
        result.innerHTML = `<p>Você digitou ${numero}. O número do sistema é <strong>MENOR</strong>, tente adivinhar novamente! NÚMERO SISTEMA = ${numSistema}</p>`
    }
}