let codigoLanche = prompt(
  "MENU DE LANCHES\n\n" +
    "1 - Hambúrguer (R$ 15,00)\n" +
    "2 - Pizza (R$ 20,00)\n" +
    "3 - Salada (R$ 12,00)\n\n" +
    "Digite o código do lanche:",
);

if (codigoLanche !== null && codigoLanche.trim() !== "") {
  codigoLanche = Number(codigoLanche);

  switch (codigoLanche) {
    case 1:
      alert("Você escolheu Hambúrguer. Valor: R$ 15,00");
      break;

    case 2:
      alert("Você escolheu Pizza. Valor: R$ 20,00");
      break;

    case 3:
      alert("Você escolheu Salada. Valor: R$ 12,00");
      break;

    default:
      alert("Código não encontrado");
  }
}
