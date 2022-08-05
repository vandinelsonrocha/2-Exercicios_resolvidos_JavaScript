function reajSalarial()  {
    let nomeFuncionario = prompt('Qual é o nome do funcionário?')
    let salario = Number(prompt(`Qual é o salário de ${nomeFuncionario}?`))
    let reajusteSalarial = Number(prompt(`O salário de ${nomeFuncionario} vai ser reajustado em qual porcentagem?`))

    let result = document.getElementById('res')
    let aumentoSalarial = salario*(reajusteSalarial/100)
    let novoSalario = salario+aumentoSalarial
    result.innerHTML = `<h3>${nomeFuncionario} recebeu um aumento salarial!<br></h3>`
    result.innerHTML += `<p>O salário atual é R$ ${salario}.<br></p>`
    result.innerHTML += `<p>Com um aumento de ${reajusteSalarial}%, o salário vai aumentar R$ ${aumentoSalarial.toFixed(2).replace('.',',')} no próximo mês.<br></p>`
    result.innerHTML += `<p>${nomeFuncionario}, a partir do próximo mês, vai passar a ganhar R$ ${novoSalario.toFixed(2).replace('.',',')}.</p>`
}