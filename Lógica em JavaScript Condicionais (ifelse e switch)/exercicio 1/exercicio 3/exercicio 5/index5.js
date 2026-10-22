let idadeParaVoto = prompt("Digite sua idade:");

if (idadeParaVoto !== null && idadeParaVoto.trim() !== "") {
  idadeParaVoto = Number(idadeParaVoto);

  if (!Number.isInteger(idadeParaVoto) || idadeParaVoto < 0) {
    alert("Digite uma idade válida!");
  } else if (idadeParaVoto < 16) {
    alert("Não pode votar");
  } else if (
    (idadeParaVoto >= 16 && idadeParaVoto <= 17) ||
    idadeParaVoto > 70
  ) {
    alert("Voto opcional");
  } else {
    alert("Voto obrigatório");
  }
}
