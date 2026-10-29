let notas = [5, 8, 4, 9, 7];

let notasAprovadas = notas.filter(function(nota) {
    return nota >= 7;
});

console.log(notasAprovadas);