const visor = document.getElementById("visor");
const botoesNumeros = document.querySelectorAll(".numero");
const botoesOperadores = document.querySelectorAll(".operador");
const botaoLimpar = document.getElementById("limpar");
const botaoIgual = document.getElementById("igual");

let numeroAtual = "";
let numeroAnterior = "";
let operador = "";

// Adiciona números ao visor
botoesNumeros.forEach((botao) => {
    botao.addEventListener("click", () => {
        numeroAtual += botao.textContent;
        visor.value = numeroAtual;
    });
});

// Escolhe a operação
botoesOperadores.forEach((botao) => {
    botao.addEventListener("click", () => {
        if (numeroAtual === "") {
            return;
        }

        numeroAnterior = numeroAtual;
        numeroAtual = "";
        operador = botao.textContent;

        visor.value = operador;
    });
});

// Realiza o cálculo
botaoIgual.addEventListener("click", () => {
    if (numeroAnterior === "" || numeroAtual === "" || operador === "") {
        return;
    }

    const primeiroNumero = Number(numeroAnterior);
    const segundoNumero = Number(numeroAtual);

    let resultado;

    switch (operador) {
        case "+":
            resultado = primeiroNumero + segundoNumero;
            break;

        case "−":
            resultado = primeiroNumero - segundoNumero;
            break;

        case "×":
            resultado = primeiroNumero * segundoNumero;
            break;

        case "÷":
            if (segundoNumero === 0) {
                visor.value = "Erro";
                numeroAtual = "";
                numeroAnterior = "";
                operador = "";
                return;
            }

            resultado = primeiroNumero / segundoNumero;
            break;
    }

    visor.value = resultado;

    numeroAtual = resultado.toString();
    numeroAnterior = "";
    operador = "";
});

// Limpa a calculadora
botaoLimpar.addEventListener("click", () => {
    numeroAtual = "";
    numeroAnterior = "";
    operador = "";

    visor.value = "";
});