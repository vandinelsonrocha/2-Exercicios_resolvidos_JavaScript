function calcular_fatorial()  {
  let número = Number(document.getElementById('cmpNum').value);
  let fatorial = document.querySelector('p#res');

  fatorial.innerHTML = `<span>Calculando ${número}!</span><br>`;
  let fat = 1;
  while(número > 1)  {
    fatorial.innerHTML += `${número} x `;
    fat = fat*número;
    número = número-1;
  }
  fatorial.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong><br><br>`;
  //toLocaleString() - permite aparecer o separador de milhar, milhões,... caso o valor do fatorial for um número muito alto
}


