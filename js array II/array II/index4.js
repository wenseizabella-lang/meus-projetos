let velocidades = [60, 75, 82, 90, 65];

let primeiroMultado = velocidades.find(function(velocidade) {
    return velocidade > 80;
});

console.log("Multa gerada para a velocidade: " + primeiroMultado);