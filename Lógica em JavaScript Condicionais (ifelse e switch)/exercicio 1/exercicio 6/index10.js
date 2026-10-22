let salario = Number(prompt("Digite seu salário"));

if (salario <= 2000) {
    console.log("Isento de imposto.");
} else if (salario <= 4000) {
    let imposto = (salario - 2000) * 0.10;
    console.log("Imposto na faixa de 10%. Valor devido: R$ " + imposto.toFixed(2));
} else {
    let imposto = 200 + (salario - 4000) * 0.20;
    console.log("Imposto na faixa de 20%. Valor devido: R$ " + imposto.toFixed(2));
}