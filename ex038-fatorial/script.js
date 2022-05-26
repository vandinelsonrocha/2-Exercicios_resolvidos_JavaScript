function calcularFatorial(número) {
  let número = document.getElementById("num");
  número = Number(número.value);
  let result = document.getElementById("res");

  if (número < 1 || número > 21) {
    alert("O número tem de ser superior a 0 e inferior a 21!");
  } else if (número == 1) {
    result.innerHTML += `Calculando ${número}!<br>`;
    result.innerHTML += `${número} = ${número}<br><br>`;
  } else {
    result.innerHTML += `Calculando ${número}!<br>`;
    result.innerHTML += `${número * calcularFatorial(número - 1)}<br><br>`;
  }
}

/*function fatorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * fatorial(n - 1); //a função possui dentro dela uma chamada pra ela mesma
  }
}
console.log(fatorial(5));*/

/*
1! = 1
5! = 5x4x3x2x1 <=> 5! = 5 x 4!  =>  n! = n x (n-1)!
*/
