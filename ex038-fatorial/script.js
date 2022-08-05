function fatorial()  {
  let numero = Number(document.getElementById('fnum').value)
  let fatorialNumero = document.getElementById('res')

  let fat = 1
  while (numero > 1)  {
    fatorialNumero.innerHTML += `${numero} x `
    fat = fat*numero
    numero --
  }
  fatorialNumero.innerHTML += `<p>O fatorial de ${numero} é 1 = <strong>${fat.toLocaleString('pt-BR')}</strong></p>`
}
