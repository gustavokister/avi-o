class TorreControle {
    constructor(aeroporto) {
        this.aeroporto = aeroporto;
        this.pistaLivre = true;   
    }

    liberaDecolar(avião) {
        if (this.pistaLivre) {
            this.pistaLivre = false;
            console.log(`Torre ${this.aeroporto}: ${avião.nome} pode DECOLAR!`);
        } else {
            console.log("Pista ocupada! Aguarde...");
        }
    }

    pistaLivreDeNovo() {
        this.pistaLivre = true;
        console.log("Pista LIVRE!");
    }
}
export default Torre;