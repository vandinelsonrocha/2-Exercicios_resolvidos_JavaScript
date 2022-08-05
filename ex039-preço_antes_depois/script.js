function verificarPreço() {
  let preçoAnterior = Number(prompt("Qual era o preço anterior do produto? (em R$)"));
  let preçoAtual = Number(prompt("Qual é o preço atual do produto? (em R$)"));

  let result = document.getElementById("res");
  result.innerHTML = "<h2>Analisando os valores informados:</h2>";
  result.innerHTML += `O produto custava R$ ${preçoAnterior.toFixed(
    2
  ).replace('.',',')} e agora custa R$ ${preçoAtual.toFixed(2).replace('.',',')}.<br><br>`;
    
  if (preçoAnterior < preçoAtual) {
    result.innerHTML += "Hoje o produto está mais caro.<br><br>";
    result.innerHTML += `O preço subiu R$ ${(
      preçoAtual - preçoAnterior
    ).toFixed(2).replace('.',',')} em relação ao preço anterior.<br><br>`;
    let percentagem1 = (preçoAtual-preçoAnterior)*100 / preçoAnterior;
    result.innerHTML += `Uma variação de ${(percentagem1).toFixed(2).replace('.',',')}% pra cima.`
  } else if (preçoAnterior > preçoAtual) {
    result.innerHTML += "Hoje o produto está mais barato.<br><br>";
    result.innerHTML += `O preço caiu R$ ${(preçoAnterior - preçoAtual).toFixed(
      2
    ).replace('.',',')} em relação ao preço anterior.<br><br>`;
    let percentagem2 = (preçoAnterior-preçoAtual)*100 / preçoAtual;
    result.innerHTML += `Uma variação de ${(percentagem2).toFixed(2).replace('.',',')}% pra baixo.`
  } else {
    result.innerHTML += "O produto manteve-se com o mesmo preço.<br><br>";
    result.innerHTML += "Uma variação de 0%.";
  }
}
