
const minhaTorre = new TorreControle();
const meuAviao = new Aeronave("Boeing 737", "PR-ABC");
const passageiro1 = new Passageiro("Carlos Silva", "123.456.789-00");

let altitudeAtual = 0;
let statusAtual = "No Pátio";

function atualizarPainel() {
    document.getElementById('txt-codigo').innerText = meuAviao.modelo + " (" + meuAviao.prefixo + ")";
    document.getElementById('txt-status').innerText = statusAtual;
    document.getElementById('txt-altitude').innerText = altitudeAtual;
    
    const img = document.getElementById('aviao');
    img.style.bottom = (altitudeAtual / 50) + "px";
}

function botaoDecolar() {
    if (minhaTorre.pedirAutorizacao()) {
        altitudeAtual = 500;
        statusAtual = "Decolando";
        atualizarPainel();
        console.log("Torre autorizou a decolagem!");
    } else {
        alert("Torre: Pista ocupada! Aguarde o pouso.");
    }
}

function botaoSubir() {
    if (altitudeAtual > 0) {
        altitudeAtual += 1000;
        statusAtual = "Em Voo";
        atualizarPainel();
    } else {
        alert("O avião precisa decolar primeiro!");
    }
}

function botaoPousar() {
    altitudeAtual = 0;
    statusAtual = "Pousado";
    minhaTorre.liberarPista(); 
    atualizarPainel();
    alert("Pouso finalizado com sucesso.");
}

atualizarPainel();