const listaHerois = [
    [
        "Superman", 15000
    ],
    [
        "InuYasha", 10000
    ],
    [
        "Sesshoumaru", 12000
    ],
    [
        "InuNoTaishou", 25000
    ],
    [
        "Homem-Aranha", 8000
    ],
    [
        "Homem-Meia", 900
    ]
];

function classificarHeroi(herois = [["Superman", 15000]]) {
    if (herois.length > 0 && typeof(herois) === "object") {
        let classificacao = [];
        for (let count = 0; count < herois.length; count++) {
            if (herois[count][1] < 1000) {
                classificacao.push("Ferro");
            } else if (herois[count][1] >= 1000 && herois[count][1] < 2000) {
                classificacao.push("Bronze");
            } else if (herois[count][1] >= 2000 && herois[count][1] < 5000) {
                classificacao.push("Prata");
            } else if (herois[count][1] >= 5000 && herois[count][1] < 7000) {
                classificacao.push("Ouro");
            } else if (herois[count][1] >= 7000 && herois[count][1] < 8000) {
                classificacao.push("Platina");
            } else if (herois[count][1] >= 8000 && herois[count][1] < 9000) {
                classificacao.push("Ascendente");
            } else if (herois[count][1] >= 9000 && herois[count][1] < 10000) {
                classificacao.push("Imortal");
            } else {
                classificacao.push("Radiante");
            }
            console.log("");
            console.log(`O Herói de nome ${herois[count][0]} está no nível de ${classificacao[count]} - seu XP é de ${herois[count][1]}`);
            console.log("-------------------------------------------------------------------------------------------")
        }
        console.log("");
    } else {
        console.log("Forneça um vetor com uma lista de Heróis, contento nome e xp. Tente novamente.");
        console.log("")
    }
    return "Fim de execução. Obrigado por usar nosso App.";
}

console.log(classificarHeroi(listaHerois));
console.log(classificarHeroi("teste"));