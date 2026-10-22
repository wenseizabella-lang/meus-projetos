  let idade = prompt("Digite sua idade:");

        if (idade !== null && idade.trim() !== "") {
            idade = Number(idade);

            if (!Number.isInteger(idade) || idade < 0) {
                alert("Digite uma idade válida!");
            } else if (idade < 12) {
                alert("Criança");
            } else if (idade <= 17) {
                alert("Adolescente");
            } else if (idade <= 59) {
                alert("Adulto");
            } else {
                alert("Idoso");
            }
        }

       