function verificarPreço() {
  let preçoAnterior = Number(prompt("Qual era o preço anterior do produto?"));
  let preçoAtual = Number(prompt("Qual é o preço atual do produto?"));

  let result = document.getElementById("res");
  result.innerHTML = "<h2>Analisando os valores informados:</h2>";
  result.innerHTML += `O produto custava R$ ${preçoAnterior.toFixed(
    2
  )} e agora custa R$ ${preçoAtual.toFixed(2)}.<br><br>`;

  if (preçoAnterior < preçoAtual) {
    result.innerHTML += "Hoje o produto está mais caro.<br><br>";
    result.innerHTML += `O preço subiu R$ ${(
      preçoAtual - preçoAnterior
    ).toFixed(2)} em relação ao preço anterior.<br><br>`;
  } else if (preçoAnterior > preçoAtual) {
    result.innerHTML += "Hoje o produto está mais barato.<br><br>";
    result.innerHTML += `O preço caiu R$ ${(preçoAnterior - preçoAtual).toFixed(
      2
    )} em relação ao preço anterior.<br><br>`;
  } else {
    result.innerHTML += "O produto manteve-se com o mesmo preço.<br><br>";
  }
}
