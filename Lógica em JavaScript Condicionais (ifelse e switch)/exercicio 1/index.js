let numero = prompt("Digite um número inteiro");

if (numero !== null && numero.trim() !== "") {
  numero = Number(numero);

  if (Number.isInteger(numero)) {
    if (numero % 2 === 0) {
      alert("O número é Par");
    } else {
      alert("O número é Ímpar");
    }
  } else {
    alert("Digite um número inteiro válido!");
  }
}
